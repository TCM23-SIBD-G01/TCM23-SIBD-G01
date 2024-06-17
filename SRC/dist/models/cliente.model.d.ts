import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    nif: number;
    nome: string;
    contacto: number;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export type ClienteWithRelations = Cliente & ClienteRelations;
