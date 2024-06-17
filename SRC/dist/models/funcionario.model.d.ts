import { Entity } from '@loopback/repository';
export declare class Funcionario extends Entity {
    id: string;
    nome: string;
    contacto: number;
    nif: number;
    morada: string;
    iban: string;
    email: string;
    horario: string;
    idade: number;
    constructor(data?: Partial<Funcionario>);
}
export interface FuncionarioRelations {
}
export type FuncionarioWithRelations = Funcionario & FuncionarioRelations;
