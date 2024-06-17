import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Encomenda, EncomendaRelations } from '../models';
export declare class EncomendaRepository extends DefaultCrudRepository<Encomenda, typeof Encomenda.prototype.id, EncomendaRelations> {
    constructor(dataSource: LojasDataSource);
}
