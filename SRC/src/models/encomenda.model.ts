import {Entity, model, property} from '@loopback/repository';

@model()
export class Encomenda extends Entity {
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
  dataPedido: string;

  @property({
    type: 'date',
    required: true,
  })
  dataEntrega: string;

  @property({
    type: 'number',
    required: true,
  })
  idLoja: number;

  @property({
    type: 'number',
    required: true,
  })
  valorEncomenda: number;

  @property({
    type: 'string',
    required: true,
  })
  metodoEnvio: string;

  @property({
    type: 'number',
    required: true,
  })
  idFornecedor: number;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;


  constructor(data?: Partial<Encomenda>) {
    super(data);
  }
}

export interface EncomendaRelations {
  // describe navigational properties here
}

export type EncomendaWithRelations = Encomenda & EncomendaRelations;
