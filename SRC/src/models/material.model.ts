import {Entity, model, property} from '@loopback/repository';

@model()
export class Material extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  composicao: string;

  @property({
    type: 'string',
    required: true,
  })
  instrucoes: string;

  @property({
    type: 'string',
    required: true,
  })
  propriedades: string;


  constructor(data?: Partial<Material>) {
    super(data);
  }
}

export interface MaterialRelations {
  // describe navigational properties here
}

export type MaterialWithRelations = Material & MaterialRelations;
