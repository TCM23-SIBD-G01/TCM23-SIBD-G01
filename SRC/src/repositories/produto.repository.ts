import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Produto, ProdutoRelations} from '../models';

export class ProdutoRepository extends DefaultCrudRepository<
  Produto,
  typeof Produto.prototype.codigoBarras,
  ProdutoRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Produto, dataSource);
  }
}
