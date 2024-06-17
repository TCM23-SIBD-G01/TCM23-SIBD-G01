import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Cor, CorRelations} from '../models';

export class CorRepository extends DefaultCrudRepository<
  Cor,
  typeof Cor.prototype.codigoHexadecimal,
  CorRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Cor, dataSource);
  }
}
