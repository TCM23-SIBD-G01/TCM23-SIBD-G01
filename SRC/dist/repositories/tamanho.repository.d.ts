import { DefaultCrudRepository } from '@loopback/repository';
import { LojasDataSource } from '../datasources';
import { Tamanho, TamanhoRelations } from '../models';
export declare class TamanhoRepository extends DefaultCrudRepository<Tamanho, typeof Tamanho.prototype.codigo, TamanhoRelations> {
    constructor(dataSource: LojasDataSource);
}
