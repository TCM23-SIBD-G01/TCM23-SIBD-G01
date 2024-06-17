import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Cliente, ClienteRelations } from '../models';
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.nif, ClienteRelations> {
    constructor(dataSource: LojasDataSource);
}
