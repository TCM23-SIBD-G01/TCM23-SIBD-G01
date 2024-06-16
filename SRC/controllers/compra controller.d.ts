import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Compra } from '../models/compra';
import { CompraRepository } from '../repositories';
export declare class CompraControllerController {
    CompraRepository: CompraRepository;
    constructor(CompraRepository: CompraRepository);
    create(Compra: Omit<Compra, 'id'>): Promise<Compra>;
    count(where?: Where<Compra>): Promise<Count>;
    find(filter?: Filter<Compra>): Promise<Compra[]>;
    updateAll(Compra: Compra, where?: Where<Compra>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Compra>): Promise<Compra>;
    updateById(id: number, Compra: Compra): Promise<void>;
    replaceById(id: number, Compra: Compra): Promise<void>;
    deleteById(id: number): Promise<void>;
}
