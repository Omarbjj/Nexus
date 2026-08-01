export interface UserForm {
    tipo_documento_id: number;
    rol_id: number;
    numero_documento: string;
    email: string;
    password: string;
    nombres: string;
    apellidos: string;
}

export interface loginForm {
    email: string;
    password: string;
}

export interface clasesForm {
    disciplina_id: number;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    estado_id: number;
}

export interface Clase {
    id: number;
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    estado: string;
    disciplinas: {
        nombre: string;
    };
}

export interface Rol {
    id: number;
    nombre: string;
}

export interface TipoDocumento {
    id: number;
    codigo: string;
    nombre: string;
}

export interface EstadoClase {
    id: number;
    nombre: string;
}

export interface DisciplinaForm {
    nombre: string;
    activa: boolean;
    responsable_id: number;
}