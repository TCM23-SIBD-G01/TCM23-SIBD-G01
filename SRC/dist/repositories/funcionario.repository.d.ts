import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Funcionario, FuncionarioRelations } from '../models';
export declare class FuncionarioRepository extends DefaultCrudRepository<Funcionario, typeof Funcionario.prototype.id, FuncionarioRelations> {
    constructor(dataSource: LojasDataSource);
}
