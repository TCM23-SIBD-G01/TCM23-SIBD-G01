import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encomenda } from '../models/encomenda';
import { Loja } from '../models/loja';
import { LojaRepository } from './loja repository';
export declare class EncomendaLojaRepository extends DefaultCrudRepository<Encomenda, typeof Loja.prototype.id> {
    protected lojaRepositoryGetter: Getter<LojaRepository>;
    readonly loja: BelongsToAccessor<Loja, typeof Loja.prototype.id>;
    constructor(dataSource: DbDataSource, lojaRepositoryGetter: Getter<LojaRepository>);
}
