import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Fornecedor } from '../models/fornecedor';
import { FornecedorRepository } from '../repositories';
export declare class FornecedorControllerController {
    FornecedorRepository: FornecedorRepository;
    constructor(FornecedorRepository: FornecedorRepository);
    create(Fornecedor: Omit<Fornecedor, 'id'>): Promise<Fornecedor>;
    count(where?: Where<Fornecedor>): Promise<Count>;
    find(filter?: Filter<Fornecedor>): Promise<Fornecedor[]>;
    updateAll(Fornecedor: Fornecedor, where?: Where<Fornecedor>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Fornecedor>): Promise<Fornecedor>;
    updateById(id: number, Fornecedor: Fornecedor): Promise<void>;
    replaceById(id: number, Fornecedor: Fornecedor): Promise<void>;
    deleteById(id: number): Promise<void>;
}
