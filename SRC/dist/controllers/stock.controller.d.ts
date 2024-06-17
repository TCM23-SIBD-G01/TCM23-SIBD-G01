import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Stock } from '../models';
import { StockRepository } from '../repositories';
export declare class StockController {
    stockRepository: StockRepository;
    constructor(stockRepository: StockRepository);
    create(stock: Stock): Promise<Stock>;
    count(where?: Where<Stock>): Promise<Count>;
    find(filter?: Filter<Stock>): Promise<Stock[]>;
    updateAll(stock: Stock, where?: Where<Stock>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Stock>): Promise<Stock>;
    updateById(id: number, stock: Stock): Promise<void>;
    replaceById(id: number, stock: Stock): Promise<void>;
    deleteById(id: number): Promise<void>;
}
