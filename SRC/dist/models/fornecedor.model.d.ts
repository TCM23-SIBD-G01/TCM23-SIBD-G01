import { Entity } from '@loopback/repository';
export declare class Fornecedor extends Entity {
    id: number;
    nome: string;
    contacto: number;
    email: string;
    iban: string;
    morada: string;
    nif: number;
    constructor(data?: Partial<Fornecedor>);
}
export interface FornecedorRelations {
}
export type FornecedorWithRelations = Fornecedor & FornecedorRelations;
