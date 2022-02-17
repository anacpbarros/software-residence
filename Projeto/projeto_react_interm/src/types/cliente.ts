export interface SensibleDataValidation {
    value: string;
    isValid: boolean;
}

export interface Cliente {
    id?: string,
    nome: string,
    sobrenome: string,
    email: string,
    senha: string,
}

export interface TemporaryClientState {
    id?: string,
    nome: string,
    sobrenome: string,
    email: SensibleDataValidation,
    senha: SensibleDataValidation,
}