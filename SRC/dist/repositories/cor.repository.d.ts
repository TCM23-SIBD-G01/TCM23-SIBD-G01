import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Cor, CorRelations } from '../models';
export declare class CorRepository extends DefaultCrudRepository<Cor, typeof Cor.prototype.codigoHexadecimal, CorRelations> {
    constructor(dataSource: LojasDataSource);
}
