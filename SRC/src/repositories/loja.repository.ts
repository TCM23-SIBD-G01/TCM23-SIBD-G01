import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Loja, LojaRelations} from '../models';

export class LojaRepository extends DefaultCrudRepository<
  Loja,
  typeof Loja.prototype.id,
  LojaRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Loja, dataSource);
  }
}
