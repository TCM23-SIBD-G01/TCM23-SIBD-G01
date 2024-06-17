import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Compra, CompraRelations } from '../models';
export declare class CompraRepository extends DefaultCrudRepository<Compra, typeof Compra.prototype.id, CompraRelations> {
    constructor(dataSource: LojasDataSource);
}
