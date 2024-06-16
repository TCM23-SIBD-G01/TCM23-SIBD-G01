import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encomenda } from '../models/encomenda';
import { Loja } from '../models/loja';
import { EncomendaRepository } from './encomenda repository';
export declare class LojaEncomendaRepository extends DefaultCrudRepository<Loja, typeof Encomenda.prototype.id> {
    protected encomendaRepositoryGetter: Getter<EncomendaRepository>;
    readonly encomenda: BelongsToAccessor<Encomenda, typeof Encomenda.prototype.id>;
    constructor(dataSource: DbDataSource, encomendaRepositoryGetter: Getter<EncomendaRepository>);
}
