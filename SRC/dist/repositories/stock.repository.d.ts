import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Stock, StockRelations } from '../models';
export declare class StockRepository extends DefaultCrudRepository<Stock, typeof Stock.prototype.codigoBarras, StockRelations> {
    constructor(dataSource: LojasDataSource);
}
