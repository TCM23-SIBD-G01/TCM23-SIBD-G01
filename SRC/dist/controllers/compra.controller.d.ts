import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Compra } from '../models';
import { CompraRepository } from '../repositories';
export declare class CompraController {
    compraRepository: CompraRepository;
    constructor(compraRepository: CompraRepository);
    create(compra: Compra): Promise<Compra>;
    count(where?: Where<Compra>): Promise<Count>;
    find(filter?: Filter<Compra>): Promise<Compra[]>;
    updateAll(compra: Compra, where?: Where<Compra>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Compra>): Promise<Compra>;
    updateById(id: number, compra: Compra): Promise<void>;
    replaceById(id: number, compra: Compra): Promise<void>;
    deleteById(id: number): Promise<void>;
}
