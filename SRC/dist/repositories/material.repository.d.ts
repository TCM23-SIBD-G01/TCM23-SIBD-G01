import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Material, MaterialRelations } from '../models';
export declare class MaterialRepository extends DefaultCrudRepository<Material, typeof Material.prototype.nome, MaterialRelations> {
    constructor(dataSource: LojasDataSource);
}
