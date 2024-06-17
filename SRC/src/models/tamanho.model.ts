import {Entity, model, property} from '@loopback/repository';

@model()
export class Tamanho extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  unidadeMedida: string;

  @property({
    type: 'string',
    required: true,
  })
  categoriaPeca: string;


  constructor(data?: Partial<Tamanho>) {
    super(data);
  }
}

export interface TamanhoRelations {
  // describe navigational properties here
}

export type TamanhoWithRelations = Tamanho & TamanhoRelations;
