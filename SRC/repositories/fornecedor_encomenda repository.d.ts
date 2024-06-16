import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encomenda } from '../models/encomenda';
import { Fornecedor } from '../models/fornecedor';
import { EncomendaRepository } from './encomenda repository';
export declare class FornecedorEncomendaRepository extends DefaultCrudRepository<Fornecedor, typeof Encomenda.prototype.id> {
    protected encomendaRepositoryGetter: Getter<EncomendaRepository>;
    readonly encomenda: BelongsToAccessor<Encomenda, typeof Encomenda.prototype.id>;
    constructor(dataSource: DbDataSource, encomendaRepositoryGetter: Getter<EncomendaRepository>);
}
