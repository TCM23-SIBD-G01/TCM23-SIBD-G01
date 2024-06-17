import {Entity, model, property} from '@loopback/repository';

@model()
export class Cor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  codigoHexadecimal: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;


  constructor(data?: Partial<Cor>) {
    super(data);
  }
}

export interface CorRelations {
  // describe navigational properties here
}

export type CorWithRelations = Cor & CorRelations;
