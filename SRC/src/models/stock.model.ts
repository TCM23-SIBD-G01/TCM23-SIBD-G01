import {Entity, model, property} from '@loopback/repository';

@model()
export class Stock extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  codigoBarras: number;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;


  constructor(data?: Partial<Stock>) {
    super(data);
  }
}

export interface StockRelations {
  // describe navigational properties here
}

export type StockWithRelations = Stock & StockRelations;
