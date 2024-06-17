import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Tamanho } from '../models';
import { TamanhoRepository } from '../repositories';
export declare class TamanhoController {
    tamanhoRepository: TamanhoRepository;
    constructor(tamanhoRepository: TamanhoRepository);
    create(tamanho: Tamanho): Promise<Tamanho>;
    count(where?: Where<Tamanho>): Promise<Count>;
    find(filter?: Filter<Tamanho>): Promise<Tamanho[]>;
    updateAll(tamanho: Tamanho, where?: Where<Tamanho>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Tamanho>): Promise<Tamanho>;
    updateById(id: string, tamanho: Tamanho): Promise<void>;
    replaceById(id: string, tamanho: Tamanho): Promise<void>;
    deleteById(id: string): Promise<void>;
}
