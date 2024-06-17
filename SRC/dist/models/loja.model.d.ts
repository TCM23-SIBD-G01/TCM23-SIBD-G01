import { Entity } from '@loopback/repository';
export declare class Loja extends Entity {
    id: number;
    nome: string;
    localizacao: string;
    constructor(data?: Partial<Loja>);
}
export interface LojaRelations {
}
export type LojaWithRelations = Loja & LojaRelations;
