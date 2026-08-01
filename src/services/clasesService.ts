import { supabase } from "../lib/supabase";
import type { clasesForm } from "../types/User";

export async function createClase(clase: clasesForm) {

    const { data, error } = await supabase
        .from("clases")
        .insert({
            disciplina_id: clase.disciplina_id,
            fecha: clase.fecha,
            hora_inicio: clase.hora_inicio,
            hora_fin: clase.hora_fin,
            estado_id: clase.estado_id
        })
        .select();

    if (error) {
        throw error;
    }

    return data;
}

export async function getClases() {

    const { data, error } = await supabase
        .from("clases")
        .select(`
            id,
            fecha,
            hora_inicio,
            hora_fin,
            disciplinas (
                nombre
            ),
            estados (
                id,
                nombre
            )
        `)
        .order("fecha", { ascending: true });

    if (error) {
        throw error;
    }

    return data;
}