import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tarefa } from '../models/tarefa';
import { TarefaRepository } from '../repositories';
export declare class TarefaControllerController {
    TarefaRepository: TarefaRepository;
    constructor(TarefaRepository: TarefaRepository);
    create(Tarefa: Omit<Tarefa, 'idFuncionario'>): Promise<Tarefa>;
    count(where?: Where<Tarefa>): Promise<Count>;
    find(filter?: Filter<Tarefa>): Promise<Tarefa[]>;
    updateAll(Tarefa: Tarefa, where?: Where<Tarefa>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Tarefa>): Promise<Tarefa>;
    updateById(id: number, Tarefa: Tarefa): Promise<void>;
    replaceById(id: number, Tarefa: Tarefa): Promise<void>;
    deleteById(id: number): Promise<void>;
}
