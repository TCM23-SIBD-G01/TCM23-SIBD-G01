import {Entity, model, property} from '@loopback/repository';

@model()
export class Fornecedor extends Entity {
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
    type: 'number',
    required: true,
  })
  contacto: number;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  iban: string;

  @property({
    type: 'string',
    required: true,
  })
  morada: string;

  @property({
    type: 'number',
    required: true,
  })
  nif: number;


  constructor(data?: Partial<Fornecedor>) {
    super(data);
  }
}

export interface FornecedorRelations {
  // describe navigational properties here
}

export type FornecedorWithRelations = Fornecedor & FornecedorRelations;
