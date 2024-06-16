import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Funcionario } from '../models/funcionario';
import { Tarefa } from '../models/tarefa';
import { TarefaRepository } from './tarefa repository';
export declare class FuncionarioRepository extends DefaultCrudRepository<Funcionario, typeof Funcionario.prototype.nif> {
    protected tarefaRepositoryGetter: Getter<TarefaRepository>;
    readonly tarefa: HasManyRepositoryFactory<Tarefa, typeof Funcionario.prototype.nif>;
    constructor(dataSource: DbDataSource, tarefaRepositoryGetter: Getter<TarefaRepository>);
}
