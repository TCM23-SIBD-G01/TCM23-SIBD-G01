import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Fornecedor, FornecedorRelations } from '../models';
export declare class FornecedorRepository extends DefaultCrudRepository<Fornecedor, typeof Fornecedor.prototype.id, FornecedorRelations> {
    constructor(dataSource: LojasDataSource);
}
