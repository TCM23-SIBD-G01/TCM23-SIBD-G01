import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {LojasDataSource} from '../datasources';
import {Tarefa, TarefaRelations} from '../models';

export class TarefaRepository extends DefaultCrudRepository<
  Tarefa,
  typeof Tarefa.prototype.idFuncionario,
  TarefaRelations
> {
  constructor(
    @inject('datasources.lojas') dataSource: LojasDataSource,
  ) {
    super(Tarefa, dataSource);
  }
}
