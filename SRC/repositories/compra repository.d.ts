import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Cliente } from '../models/cliente';
import { Compra } from '../models/compra';
import { ClienteRepository } from './cliente repository';
export declare class CompraRepository extends DefaultCrudRepository<Compra, typeof Cliente.prototype.nif> {
    protected clienteRepositoryGetter: Getter<ClienteRepository>;
    readonly cliente: BelongsToAccessor<Cliente, typeof Cliente.prototype.nif>;
    constructor(dataSource: DbDataSource, clienteRepositoryGetter: Getter<ClienteRepository>);
}
