import { Entity } from '@loopback/repository';
export declare class Funcionario extends Entity {
    id: number;
    nome: string;
    contacto: number;
    nif: number;
    morada: string;
    iban: string;
    email: string;
    horario: string;
    idade: number;
}
