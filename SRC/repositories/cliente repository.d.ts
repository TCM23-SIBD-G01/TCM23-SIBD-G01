import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Cliente } from '../models/cliente';
import { Compra } from '../models/compra';
import { CompraRepository } from './compra repository';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.nif> {
    protected compraRepositoryGetter: Getter<CompraRepository>;
    readonly compra: HasManyRepositoryFactory<Compra, typeof Cliente.prototype.nif>;
    constructor(dataSource: DbDataSource, compraRepositoryGetter: Getter<CompraRepository>);
}
