import { supabase } from "../lib/supabase";
import type { DisciplinaForm } from "../types/User";

export async function getDisciplinas() {

    const { data, error } = await supabase
        .from("disciplinas")
        .select("*")
        .eq("activa", true)
        .order("nombre");

    if (error) {
        throw error;
    }

    return data;
}

export async function createDisciplina(
    disciplina: DisciplinaForm
) {

    const { data, error } = await supabase
        .from("disciplinas")
        .insert({
            nombre: disciplina.nombre,
            activa: disciplina.activa,
            responsable_id: disciplina.responsable_id
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;

}