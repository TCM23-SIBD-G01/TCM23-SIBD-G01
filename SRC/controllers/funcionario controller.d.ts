import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Funcionario } from '../models/funcionario';
import { FuncionarioRepository } from '../repositories';
export declare class FuncionarioControllerController {
    FuncionarioRepository: FuncionarioRepository;
    constructor(FuncionarioRepository: FuncionarioRepository);
    create(Funcionario: Omit<Funcionario, 'id'>): Promise<Funcionario>;
    count(where?: Where<Funcionario>): Promise<Count>;
    find(filter?: Filter<Funcionario>): Promise<Funcionario[]>;
    updateAll(Funcionario: Funcionario, where?: Where<Funcionario>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Funcionario>): Promise<Funcionario>;
    updateById(id: number, Funcionario: Funcionario): Promise<void>;
    replaceById(id: number, Funcionario: Funcionario): Promise<void>;
    deleteById(id: number): Promise<void>;
}
