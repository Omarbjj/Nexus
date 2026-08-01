import { supabase } from "../lib/supabase";
import { actualizarPuntaje } from "./puntajeService";

export async function confirmarAsistencia(
    userId: number,
    claseId: number
) {

    // Verificar si ya confirmó
    const { data: existente } = await supabase
        .from("asistencias")
        .select("id")
        .eq("user_id", userId)
        .eq("clase_id", claseId)
        .maybeSingle();

    if (existente) {
        throw new Error("Ya confirmaste tu asistencia.");
    }

    const { data, error } = await supabase
        .from("asistencias")
        .insert({
            user_id: userId,
            clase_id: claseId,
            asistio: null
        })
        .select();

    if (error) {
        throw error;
    }

    return data;
}

export async function registrarAsistencia(
    userId: number,
    claseId: number,
    asistio: boolean
) {

    const { data, error } = await supabase
        .from("asistencias")
        .update({
            asistio
        })
        .eq("user_id", userId)
        .eq("clase_id", claseId)
        .select()
        .single();

    if (error) {
        throw error;
    }

    await actualizarPuntaje(
        userId,
        asistio ? 1 : -1
    );

    return data;

}

export async function getAsistenciasPorClase(
    claseId: number
) {

    const { data, error } = await supabase
        .from("asistencias")
        .select(`
            id,
            asistio,
            users (
                id,
                nombres,
                apellidos
            )
        `)
        .eq("clase_id", claseId)
        .is("asistio", null);

    if (error) {
        throw error;
    }

    return data;

}

export async function registrarAsistencias(
    claseId: number,
    asistencias: {
        user_id: number;
        asistio: boolean;
    }[]
) {

    const { error } =
        await supabase.rpc(
            "registrar_asistencias",
            {
                p_clase_id: claseId,
                p_asistencias: asistencias
            }
        );

    if (error) {

        throw error;

    }

}