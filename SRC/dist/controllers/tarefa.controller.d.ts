import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tarefa } from '../models';
import { TarefaRepository } from '../repositories';
export declare class TarefaController {
    tarefaRepository: TarefaRepository;
    constructor(tarefaRepository: TarefaRepository);
    create(tarefa: Tarefa): Promise<Tarefa>;
    count(where?: Where<Tarefa>): Promise<Count>;
    find(filter?: Filter<Tarefa>): Promise<Tarefa[]>;
    updateAll(tarefa: Tarefa, where?: Where<Tarefa>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Tarefa>): Promise<Tarefa>;
    updateById(id: number, tarefa: Tarefa): Promise<void>;
    replaceById(id: number, tarefa: Tarefa): Promise<void>;
    deleteById(id: number): Promise<void>;
}
