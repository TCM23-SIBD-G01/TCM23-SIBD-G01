import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Fornecedor } from '../models';
import { FornecedorRepository } from '../repositories';
export declare class FornecedorController {
    fornecedorRepository: FornecedorRepository;
    constructor(fornecedorRepository: FornecedorRepository);
    create(fornecedor: Fornecedor): Promise<Fornecedor>;
    count(where?: Where<Fornecedor>): Promise<Count>;
    find(filter?: Filter<Fornecedor>): Promise<Fornecedor[]>;
    updateAll(fornecedor: Fornecedor, where?: Where<Fornecedor>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Fornecedor>): Promise<Fornecedor>;
    updateById(id: number, fornecedor: Fornecedor): Promise<void>;
    replaceById(id: number, fornecedor: Fornecedor): Promise<void>;
    deleteById(id: number): Promise<void>;
}
