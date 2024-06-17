import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Loja, LojaRelations } from '../models';
export declare class LojaRepository extends DefaultCrudRepository<Loja, typeof Loja.prototype.id, LojaRelations> {
    constructor(dataSource: LojasDataSource);
}
