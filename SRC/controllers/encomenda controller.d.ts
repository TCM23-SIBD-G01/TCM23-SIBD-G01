import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Encomenda } from '../models/encomenda';
import { EncomendaRepository } from '../repositories';
export declare class EncomendaControllerController {
    EncomendaRepository: EncomendaRepository;
    constructor(EncomendaRepository: EncomendaRepository);
    create(Encomenda: Omit<Encomenda, 'id'>): Promise<Encomenda>;
    count(where?: Where<Encomenda>): Promise<Count>;
    find(filter?: Filter<Encomenda>): Promise<Encomenda[]>;
    updateAll(Encomenda: Encomenda, where?: Where<Encomenda>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Encomenda>): Promise<Encomenda>;
    updateById(id: number, Encomenda: Encomenda): Promise<void>;
    replaceById(id: number, Encomenda: Encomenda): Promise<void>;
    deleteById(id: number): Promise<void>;
}
