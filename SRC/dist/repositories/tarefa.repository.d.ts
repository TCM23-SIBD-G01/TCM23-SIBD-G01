import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Tarefa, TarefaRelations } from '../models';
export declare class TarefaRepository extends DefaultCrudRepository<Tarefa, typeof Tarefa.prototype.idFuncionario, TarefaRelations> {
    constructor(dataSource: LojasDataSource);
}
