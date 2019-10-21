

// Acciones
export interface Action {
    type: string;
    payload?: any;
}

export interface Reducer<T> {
    (): T
}