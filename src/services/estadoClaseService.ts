import { supabase } from "../lib/supabase";

export async function getEstadosClase() {

    const { data, error } = await supabase
        .from("estados")
        .select("*")
        .order("id");

    if (error) {
        throw error;
    }

    return data;
}