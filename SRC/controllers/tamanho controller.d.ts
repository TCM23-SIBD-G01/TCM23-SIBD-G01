import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tamanho } from '../models/tamanho';
import { TamanhoRepository } from '../repositories';
export declare class TamanhoControllerController {
    tamanhoRepository: TamanhoRepository;
    constructor(tamanhoRepository: TamanhoRepository);
    create(tamanho: Omit<Tamanho, 'codigo'>): Promise<Tamanho>;
    count(where?: Where<Tamanho>): Promise<Count>;
    find(filter?: Filter<Tamanho>): Promise<Tamanho[]>;
    updateAll(tamanho: Tamanho, where?: Where<Tamanho>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Tamanho>): Promise<Tamanho>;
    updateById(id: number, tamanho: Tamanho): Promise<void>;
    replaceById(id: number, tamanho: Tamanho): Promise<void>;
    deleteById(id: number): Promise<void>;
}
