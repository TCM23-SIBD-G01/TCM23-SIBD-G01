import { Entity } from '@loopback/repository';
export declare class Produto extends Entity {
    codigoBarras: number;
    sexo: string;
    estacao: string;
    nome: string;
    preco: number;
    quantidade: number;
    constructor(data?: Partial<Produto>);
}
export interface ProdutoRelations {
}
export type ProdutoWithRelations = Produto & ProdutoRelations;
