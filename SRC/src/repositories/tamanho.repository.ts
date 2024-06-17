import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Tamanho, TamanhoRelations} from '../models';

export class TamanhoRepository extends DefaultCrudRepository<
  Tamanho,
  typeof Tamanho.prototype.codigo,
  TamanhoRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Tamanho, dataSource);
  }
}
