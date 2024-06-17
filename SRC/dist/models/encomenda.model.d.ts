import { Entity } from '@loopback/repository';
export declare class Encomenda extends Entity {
    id: number;
    dataPedido: string;
    dataEntrega: string;
    idLoja: number;
    valorEncomenda: number;
    metodoEnvio: string;
    idFornecedor: number;
    quantidade: number;
    constructor(data?: Partial<Encomenda>);
}
export interface EncomendaRelations {
}
export type EncomendaWithRelations = Encomenda & EncomendaRelations;
