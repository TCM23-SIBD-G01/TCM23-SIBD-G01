import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Stock, StockRelations} from '../models';

export class StockRepository extends DefaultCrudRepository<
  Stock,
  typeof Stock.prototype.codigoBarras,
  StockRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Stock, dataSource);
  }
}
