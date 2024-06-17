import { Entity } from '@loopback/repository';
export declare class Cor extends Entity {
    codigoHexadecimal: string;
    nome: string;
    constructor(data?: Partial<Cor>);
}
export interface CorRelations {
}
export type CorWithRelations = Cor & CorRelations;
