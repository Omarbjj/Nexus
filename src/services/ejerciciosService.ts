
import { supabase } from "../lib/supabase";

export type Ejercicio = string;

export interface SerieEjercicio {
  id?: number;
  numero_serie: number;
  valor: number;
}

export interface RegistroEjercicio extends SerieEjercicio {
  fecha: string;
  ejercicio: Ejercicio;
  user_id: number;
  created_at: string;
  updated_at: string;
}

/**
 * Obtiene el ID interno de public.users
 * utilizando la sesión actual de Supabase Auth.
 */
async function obtenerUsuarioId(): Promise<number> {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError) throw authError;

  if (!user) {
    throw new Error("Debes iniciar sesión.");
  }

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("auth_id", user.id)
    .single();

  if (error) throw error;

  return data.id;
}

/**
 * Obtiene las series de un ejercicio para un día concreto.
 */
export async function obtenerSeriesEjercicio(
  ejercicio: Ejercicio,
  fecha: string
): Promise<SerieEjercicio[]> {
  const userId = await obtenerUsuarioId();

  const { data, error } = await supabase
    .from("ejercicios_registros")
    .select("id, numero_serie, valor")
    .eq("user_id", userId)
    .eq("fecha", fecha)
    .eq("ejercicio", ejercicio)
    .order("numero_serie", { ascending: true });

  if (error) throw error;

  return (data ?? []).map((registro) => ({
    id: registro.id,
    numero_serie: registro.numero_serie,
    valor: registro.valor,
  }));
}

/**
 * Guarda el conjunto de series de un ejercicio para una fecha.
 *
 * - Inserta las series nuevas.
 * - Actualiza las series existentes.
 * - Elimina las series que se quitaron de la interfaz.
 */
export async function guardarSeriesEjercicio(
  ejercicio: Ejercicio,
  fecha: string,
  series: SerieEjercicio[]
): Promise<void> {
  const userId = await obtenerUsuarioId();

  // Validar antes de enviar datos a Supabase.
  const numeros = series.map((serie) => serie.numero_serie);

  if (new Set(numeros).size !== numeros.length) {
    throw new Error("No puede haber números de serie duplicados.");
  }

  for (const serie of series) {
    if (
      !Number.isInteger(serie.numero_serie) ||
      serie.numero_serie <= 0 ||
      !Number.isInteger(serie.valor) ||
      serie.valor < 0
    ) {
      throw new Error("Los números de serie y valores no son válidos.");
    }
  }

  // Consultar los registros que ya existen.
  const { data: existentes, error: consultaError } = await supabase
    .from("ejercicios_registros")
    .select("numero_serie")
    .eq("user_id", userId)
    .eq("fecha", fecha)
    .eq("ejercicio", ejercicio);

  if (consultaError) throw consultaError;

  // Insertar o actualizar las series enviadas.
  // La restricción UNIQUE determina qué registro se actualiza.
  if (series.length > 0) {
    const registros = series.map((serie) => ({
      user_id: userId,
      fecha,
      ejercicio,
      numero_serie: serie.numero_serie,
      valor: serie.valor,
      updated_at: new Date().toISOString(),
    }));

    const { error: guardadoError } = await supabase
      .from("ejercicios_registros")
      .upsert(registros, {
        onConflict: "user_id,fecha,ejercicio,numero_serie",
      });

    if (guardadoError) throw guardadoError;
  }

  // Identificar las series eliminadas en la interfaz.
  const numerosActuales = new Set(numeros);

  const numerosEliminados = (existentes ?? [])
    .map((registro) => registro.numero_serie)
    .filter((numero) => !numerosActuales.has(numero));

  // Eliminar solamente las series que pertenecen
  // al usuario, fecha y ejercicio actuales.
  if (numerosEliminados.length > 0) {
    const { error: eliminacionError } = await supabase
      .from("ejercicios_registros")
      .delete()
      .eq("user_id", userId)
      .eq("fecha", fecha)
      .eq("ejercicio", ejercicio)
      .in("numero_serie", numerosEliminados);

    if (eliminacionError) throw eliminacionError;
  }
}
