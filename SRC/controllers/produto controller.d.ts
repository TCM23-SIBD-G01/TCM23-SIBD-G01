import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Produto } from '../models/produto';
import { ProdutoRepository } from '../repositories';
export declare class ProdutoControllerController {
    ProdutoRepository: ProdutoRepository;
    constructor(ProdutoRepository: ProdutoRepository);
    create(Produto: Omit<Produto, 'codigoBarras'>): Promise<Produto>;
    count(where?: Where<Produto>): Promise<Count>;
    find(filter?: Filter<Produto>): Promise<Produto[]>;
    updateAll(Produto: Produto, where?: Where<Produto>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Produto>): Promise<Produto>;
    updateById(id: number, Produto: Produto): Promise<void>;
    replaceById(id: number, Produto: Produto): Promise<void>;
    deleteById(id: number): Promise<void>;
}
