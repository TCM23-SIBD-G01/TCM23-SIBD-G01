import { Entity } from '@loopback/repository';
export declare class Tarefa extends Entity {
    idFuncionario: number;
    horario: string;
    categoria: Categoria;
    data: string;
    status: Status;
    descricao: string;
}
