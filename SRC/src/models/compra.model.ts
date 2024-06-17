import {Entity, model, property} from '@loopback/repository';

@model()
export class Compra extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @property({
    type: 'number',
    required: true,
  })
  nifCliente: number;

  @property({
    type: 'number',
    required: true,
  })
  valorCompra: number;

  @property({
    type: 'number',
    default: 0,
  })
  descontosAplicados?: number;

  @property({
    type: 'string',
    required: true,
  })
  metodoPagamento: string;


  constructor(data?: Partial<Compra>) {
    super(data);
  }
}

export interface CompraRelations {
  // describe navigational properties here
}

export type CompraWithRelations = Compra & CompraRelations;
