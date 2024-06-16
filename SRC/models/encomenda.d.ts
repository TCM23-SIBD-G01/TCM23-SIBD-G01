import { Entity } from '@loopback/repository';
export declare class Encomenda extends Entity {
    id: number;
    dataPedido: string;
    dataEntrega: string;
    idLoja: number;
    valorEncomenda: number;
    metodoEnvio: MetodoEnvio;
    idFornecedor: string;
    quantidade: number;
}
