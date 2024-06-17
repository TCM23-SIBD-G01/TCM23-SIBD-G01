import {Entity, model, property} from '@loopback/repository';

@model()
export class Produto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  codigoBarras: number;

  @property({
    type: 'string',
    required: true,
  })
  sexo: string;

  @property({
    type: 'string',
    required: true,
  })
  estacao: string;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  preco: number;

  @property({
    type: 'number',
    required: true,
  })
  quantidade: number;


  constructor(data?: Partial<Produto>) {
    super(data);
  }
}

export interface ProdutoRelations {
  // describe navigational properties here
}

export type ProdutoWithRelations = Produto & ProdutoRelations;
