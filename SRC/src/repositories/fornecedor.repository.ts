import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Fornecedor, FornecedorRelations} from '../models';

export class FornecedorRepository extends DefaultCrudRepository<
  Fornecedor,
  typeof Fornecedor.prototype.id,
  FornecedorRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Fornecedor, dataSource);
  }
}
