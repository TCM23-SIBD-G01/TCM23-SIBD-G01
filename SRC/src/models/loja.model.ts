import {Entity, model, property} from '@loopback/repository';

@model()
export class Loja extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
    required: true,
  })
  localizacao: string;


  constructor(data?: Partial<Loja>) {
    super(data);
  }
}

export interface LojaRelations {
  // describe navigational properties here
}

export type LojaWithRelations = Loja & LojaRelations;
