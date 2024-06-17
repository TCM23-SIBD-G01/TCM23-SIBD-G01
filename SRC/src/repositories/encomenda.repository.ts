import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Encomenda, EncomendaRelations} from '../models';

export class EncomendaRepository extends DefaultCrudRepository<
  Encomenda,
  typeof Encomenda.prototype.id,
  EncomendaRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Encomenda, dataSource);
  }
}
