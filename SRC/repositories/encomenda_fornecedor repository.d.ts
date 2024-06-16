import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encomenda } from '../models/encomenda';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorRepository } from './fornecedor repository';
export declare class EncomendaFornecedorRepository extends DefaultCrudRepository<Encomenda, typeof Fornecedor.prototype.id> {
    protected fornecedorRepositoryGetter: Getter<FornecedorRepository>;
    readonly fornecedor: BelongsToAccessor<Fornecedor, typeof Fornecedor.prototype.id>;
    constructor(dataSource: DbDataSource, fornecedorRepositoryGetter: Getter<FornecedorRepository>);
}
