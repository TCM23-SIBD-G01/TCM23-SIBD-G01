import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Cor } from '../models/cor';
import { Produto } from '../models/produto';
import { ProdutoRepository } from './produto repository';
export declare class CorRepository extends DefaultCrudRepository<Cor, typeof Produto.prototype.codigoBarras> {
    protected produtoRepositoryGetter: Getter<ProdutoRepository>;
    readonly produto: BelongsToAccessor<Produto, typeof Produto.prototype.codigoBarras>;
    constructor(dataSource: DbDataSource, produtoRepositoryGetter: Getter<ProdutoRepository>);
}
