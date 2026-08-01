import { supabase } from "../lib/supabase";

export async function getTiposDocumento() {

    const { data, error } = await supabase
        .from("tipos_documento")
        .select("*")
        .order("id");

    if (error) {
        throw error;
    }

    return data;

}