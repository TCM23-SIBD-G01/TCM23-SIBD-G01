import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encomenda } from '../models/encomenda';
import { Fornecedor } from '../models/fornecedor';
import { EncomendaFornecedorRepository } from './encomenda_fornecedor repository';
export declare class FornecedorRepository extends DefaultCrudRepository<Fornecedor, typeof Fornecedor.prototype.id> {
    protected encomendaRepositoryGetter: Getter<EncomendaFornecedorRepository>;
    readonly encomenda: HasManyRepositoryFactory<Encomenda, typeof Fornecedor.prototype.id>;
    constructor(dataSource: DbDataSource, encomendaRepositoryGetter: Getter<EncomendaFornecedorRepository>);
}
