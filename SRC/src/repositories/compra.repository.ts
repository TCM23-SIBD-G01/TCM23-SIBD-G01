import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Compra, CompraRelations} from '../models';

export class CompraRepository extends DefaultCrudRepository<
  Compra,
  typeof Compra.prototype.id,
  CompraRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Compra, dataSource);
  }
}
