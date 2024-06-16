import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Stock } from '../models/stock';
import { StockRepository } from '../repositories';
export declare class StockControllerController {
    clienteRepository: StockRepository;
    constructor(clienteRepository: StockRepository);
    create(cliente: Omit<Stock, 'codigoBarras'>): Promise<Stock>;
    count(where?: Where<Stock>): Promise<Count>;
    find(filter?: Filter<Stock>): Promise<Stock[]>;
    updateAll(cliente: Stock, where?: Where<Stock>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Stock>): Promise<Stock>;
    updateById(id: number, cliente: Stock): Promise<void>;
    replaceById(id: number, cliente: Stock): Promise<void>;
    deleteById(id: number): Promise<void>;
}
