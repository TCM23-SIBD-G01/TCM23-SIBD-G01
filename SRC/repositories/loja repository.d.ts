import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encomenda } from '../models/encomenda';
import { Loja } from '../models/loja';
import { EncomendaLojaRepository } from './encomenda_loja repository';
export declare class LojaRepository extends DefaultCrudRepository<Loja, typeof Loja.prototype.id> {
    protected encomendaRepositoryGetter: Getter<EncomendaLojaRepository>;
    readonly encomenda: HasManyRepositoryFactory<Encomenda, typeof Loja.prototype.id>;
    constructor(dataSource: DbDataSource, encomendaRepositoryGetter: Getter<EncomendaLojaRepository>);
}
