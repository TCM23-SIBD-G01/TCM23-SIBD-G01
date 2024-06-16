import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Funcionario } from '../models/funcionario';
import { Tarefa } from '../models/tarefa';
import { FuncionarioRepository } from './funcionario repository';
export declare class TarefaRepository extends DefaultCrudRepository<Tarefa, typeof Funcionario.prototype.nif> {
    protected funcionarioRepositoryGetter: Getter<FuncionarioRepository>;
    readonly funcionario: BelongsToAccessor<Funcionario, typeof Funcionario.prototype.nif>;
    constructor(dataSource: DbDataSource, funcionarioRepositoryGetter: Getter<FuncionarioRepository>);
}
