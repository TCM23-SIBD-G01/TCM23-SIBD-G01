import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Material } from '../models';
import { MaterialRepository } from '../repositories';
export declare class MaterialController {
    materialRepository: MaterialRepository;
    constructor(materialRepository: MaterialRepository);
    create(material: Material): Promise<Material>;
    count(where?: Where<Material>): Promise<Count>;
    find(filter?: Filter<Material>): Promise<Material[]>;
    updateAll(material: Material, where?: Where<Material>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Material>): Promise<Material>;
    updateById(id: string, material: Material): Promise<void>;
    replaceById(id: string, material: Material): Promise<void>;
    deleteById(id: string): Promise<void>;
}
