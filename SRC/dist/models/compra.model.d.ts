import { Entity } from '@loopback/repository';
export declare class Compra extends Entity {
    id: number;
    data: string;
    nifCliente: number;
    valorCompra: number;
    descontosAplicados?: number;
    metodoPagamento: string;
    constructor(data?: Partial<Compra>);
}
export interface CompraRelations {
}
export type CompraWithRelations = Compra & CompraRelations;
