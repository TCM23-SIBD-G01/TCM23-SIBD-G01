import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Produto, ProdutoRelations } from '../models';
export declare class ProdutoRepository extends DefaultCrudRepository<Produto, typeof Produto.prototype.codigoBarras, ProdutoRelations> {
    constructor(dataSource: LojasDataSource);
}
