import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cor } from '../models';
import { CorRepository } from '../repositories';
export declare class CorController {
    corRepository: CorRepository;
    constructor(corRepository: CorRepository);
    create(cor: Cor): Promise<Cor>;
    count(where?: Where<Cor>): Promise<Count>;
    find(filter?: Filter<Cor>): Promise<Cor[]>;
    updateAll(cor: Cor, where?: Where<Cor>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Cor>): Promise<Cor>;
    updateById(id: string, cor: Cor): Promise<void>;
    replaceById(id: string, cor: Cor): Promise<void>;
    deleteById(id: string): Promise<void>;
}
