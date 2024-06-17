import {Entity, model, property} from '@loopback/repository';

@model()
export class Funcionario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

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
    type: 'number',
    required: true,
  })
  nif: number;

  @property({
    type: 'string',
    required: true,
  })
  morada: string;

  @property({
    type: 'string',
    required: true,
  })
  iban: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  horario: string;

  @property({
    type: 'number',
    required: true,
  })
  idade: number;


  constructor(data?: Partial<Funcionario>) {
    super(data);
  }
}

export interface FuncionarioRelations {
  // describe navigational properties here
}

export type FuncionarioWithRelations = Funcionario & FuncionarioRelations;
