import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Funcionario } from '../models/funcionario';
import { Material } from '../models/material';
import { FuncionarioRepository } from './funcionario repository';
export declare class MaterialRepository extends DefaultCrudRepository<Material, typeof Funcionario.prototype.nif> {
    protected funcionarioRepositoryGetter: Getter<FuncionarioRepository>;
    readonly funcionario: BelongsToAccessor<Funcionario, typeof Funcionario.prototype.nif>;
    constructor(dataSource: DbDataSource, funcionarioRepositoryGetter: Getter<FuncionarioRepository>);
}
