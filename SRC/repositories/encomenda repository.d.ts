import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encomenda } from '../models/encomenda';
import { Tarefa } from '../models/tarefa';
import { TarefaRepository } from './tarefa repository';
export declare class EncomendaRepository extends DefaultCrudRepository<Encomenda, typeof Encomenda.prototype.id> {
    protected tarefaRepositoryGetter: Getter<TarefaRepository>;
    readonly tarefa: HasManyRepositoryFactory<Tarefa, typeof Encomenda.prototype.id>;
    constructor(dataSource: DbDataSource, tarefaRepositoryGetter: Getter<TarefaRepository>);
}
