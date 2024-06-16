import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Cor } from '../models/cor';
import { CorRepository } from '../repositories';
export declare class CorControllerController {
    CorRepository: CorRepository;
    constructor(CorRepository: CorRepository);
    create(Cor: Omit<Cor, 'codigoHexadecimal'>): Promise<Cor>;
    count(where?: Where<Cor>): Promise<Count>;
    find(filter?: Filter<Cor>): Promise<Cor[]>;
    updateAll(Cor: Cor, where?: Where<Cor>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Cor>): Promise<Cor>;
    updateById(id: number, Cor: Cor): Promise<void>;
    replaceById(id: number, Cor: Cor): Promise<void>;
    deleteById(id: number): Promise<void>;
}
