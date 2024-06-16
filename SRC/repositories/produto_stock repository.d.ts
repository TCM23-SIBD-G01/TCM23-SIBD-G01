import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Produto } from '../models/produto';
import { Stock } from '../models/stock';
import { StockRepository } from './stock repository';
export declare class ProdutoStockRepository extends DefaultCrudRepository<Produto, typeof Stock.prototype.codigoBarras> {
    protected stockRepositoryGetter: Getter<StockRepository>;
    readonly stock: BelongsToAccessor<Stock, typeof Stock.prototype.codigoBarras>;
    constructor(dataSource: DbDataSource, stockRepositoryGetter: Getter<StockRepository>);
}
