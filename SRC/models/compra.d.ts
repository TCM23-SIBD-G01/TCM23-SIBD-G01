import { Entity } from '@loopback/repository';
export declare class Compra extends Entity {
    id: string;
    data: string;
    nifCliente: number;
    valorCompra: number;
    descontosAplicados: number;
    metodoPagamento: MetodoPagamento;
}
