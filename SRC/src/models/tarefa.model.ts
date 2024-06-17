import {Entity, model, property} from '@loopback/repository';

@model()
export class Tarefa extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  idFuncionario: number;

  @property({
    type: 'number',
    required: true,
  })
  horario: number;

  @property({
    type: 'number',
    required: true,
  })
  categoria: string;

  @property({
    type: 'number',
    required: true,
  })
  data: Date;

  @property({
    type: 'number',
    required: true,
  })
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  descricao: string;


  constructor(data?: Partial<Tarefa>) {
    super(data);
  }
}

export interface TarefaRelations {
  // describe navigational properties here
}

export type TarefaWithRelations = Tarefa & TarefaRelations;
