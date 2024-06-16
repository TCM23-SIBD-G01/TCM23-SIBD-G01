import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Material } from '../models/material';
import { MaterialRepository } from '../repositories';
export declare class MaterialControllerController {
    MaterialRepository: MaterialRepository;
    constructor(MaterialRepository: MaterialRepository);
    create(Material: Omit<Material, 'nome'>): Promise<Material>;
    count(where?: Where<Material>): Promise<Count>;
    find(filter?: Filter<Material>): Promise<Material[]>;
    updateAll(Material: Material, where?: Where<Material>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Material>): Promise<Material>;
    updateById(id: number, Material: Material): Promise<void>;
    replaceById(id: number, Material: Material): Promise<void>;
    deleteById(id: number): Promise<void>;
}
