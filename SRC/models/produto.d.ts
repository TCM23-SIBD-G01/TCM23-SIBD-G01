import { Entity } from '@loopback/repository';
export declare class Produto extends Entity {
    codigoBarras: number;
    sexo: Sexo;
    estacao: Estacao;
    nome: string;
    preco: number;
    quantidade: number;
}
