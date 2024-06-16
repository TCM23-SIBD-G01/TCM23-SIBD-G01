import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Funcionario } from '../models/funcionario';
import { Tarefa } from '../models/tarefa';
import { TarefaRepository } from './tarefa repository';
export declare class FuncionarioTarefaRepository extends DefaultCrudRepository<Funcionario, typeof Tarefa.prototype.idFuncionario> {
    protected tarefaRepositoryGetter: Getter<TarefaRepository>;
    readonly tarefa: BelongsToAccessor<Tarefa, typeof Tarefa.prototype.idFuncionario>;
    constructor(dataSource: DbDataSource, tarefaRepositoryGetter: Getter<TarefaRepository>);
}
