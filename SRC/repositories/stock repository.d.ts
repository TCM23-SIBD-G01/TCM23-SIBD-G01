import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Produto } from '../models/produto';
import { Stock } from '../models/stock';
import { ProdutoRepository } from './produto repository';
export declare class StockRepository extends DefaultCrudRepository<Stock, typeof Stock.prototype.codigoBarras> {
    protected produtoRepositoryGetter: Getter<ProdutoRepository>;
    readonly produto: HasManyRepositoryFactory<Produto, typeof Stock.prototype.codigoBarras>;
    constructor(dataSource: DbDataSource, produtoRepositoryGetter: Getter<ProdutoRepository>);
}
