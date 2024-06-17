import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Funcionario } from '../models';
import { FuncionarioRepository } from '../repositories';
export declare class FuncionarioController {
    funcionarioRepository: FuncionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    create(funcionario: Funcionario): Promise<Funcionario>;
    count(where?: Where<Funcionario>): Promise<Count>;
    find(filter?: Filter<Funcionario>): Promise<Funcionario[]>;
    updateAll(funcionario: Funcionario, where?: Where<Funcionario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Funcionario>): Promise<Funcionario>;
    updateById(id: string, funcionario: Funcionario): Promise<void>;
    replaceById(id: string, funcionario: Funcionario): Promise<void>;
    deleteById(id: string): Promise<void>;
}
