import { Entity } from '@loopback/repository';
export declare class Material extends Entity {
    nome: string;
    composicao: string;
    instrucoes: string;
    propriedades: string;
    constructor(data?: Partial<Material>);
}
export interface MaterialRelations {
}
export type MaterialWithRelations = Material & MaterialRelations;
