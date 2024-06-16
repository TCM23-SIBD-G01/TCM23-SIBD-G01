import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Loja } from '../models/loja';
import { LojaRepository } from '../repositories';
export declare class LojaControllerController {
    clienteRepository: LojaRepository;
    constructor(clienteRepository: LojaRepository);
    create(cliente: Omit<Loja, 'id'>): Promise<Loja>;
    count(where?: Where<Loja>): Promise<Count>;
    find(filter?: Filter<Loja>): Promise<Loja[]>;
    updateAll(cliente: Loja, where?: Where<Loja>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Loja>): Promise<Loja>;
    updateById(id: number, cliente: Loja): Promise<void>;
    replaceById(id: number, cliente: Loja): Promise<void>;
    deleteById(id: number): Promise<void>;
}
