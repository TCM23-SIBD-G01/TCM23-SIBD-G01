import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Material, MaterialRelations} from '../models';

export class MaterialRepository extends DefaultCrudRepository<
  Material,
  typeof Material.prototype.nome,
  MaterialRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Material, dataSource);
  }
}
