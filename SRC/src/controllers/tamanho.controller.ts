import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Tamanho} from '../models';
import {TamanhoRepository} from '../repositories';

export class TamanhoController {
  constructor(
    @repository(TamanhoRepository)
    public tamanhoRepository: TamanhoRepository,
  ) { }

  @post('/tamanhos')
  @response(200, {
    description: 'Tamanho model instance',
    content: {'application/json': {schema: getModelSchemaRef(Tamanho)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tamanho, {
            title: 'NewTamanho',

          }),
        },
      },
    })
    tamanho: Tamanho,
  ): Promise<Tamanho> {
    return this.tamanhoRepository.create(tamanho);
  }

  @get('/tamanhos/count')
  @response(200, {
    description: 'Tamanho model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Tamanho) where?: Where<Tamanho>,
  ): Promise<Count> {
    return this.tamanhoRepository.count(where);
  }

  @get('/tamanhos')
  @response(200, {
    description: 'Array of Tamanho model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Tamanho, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Tamanho) filter?: Filter<Tamanho>,
  ): Promise<Tamanho[]> {
    return this.tamanhoRepository.find(filter);
  }

  @patch('/tamanhos')
  @response(200, {
    description: 'Tamanho PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tamanho, {partial: true}),
        },
      },
    })
    tamanho: Tamanho,
    @param.where(Tamanho) where?: Where<Tamanho>,
  ): Promise<Count> {
    return this.tamanhoRepository.updateAll(tamanho, where);
  }

  @get('/tamanhos/{id}')
  @response(200, {
    description: 'Tamanho model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Tamanho, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: string,
    @param.filter(Tamanho, {exclude: 'where'}) filter?: FilterExcludingWhere<Tamanho>
  ): Promise<Tamanho> {
    return this.tamanhoRepository.findById(id, filter);
  }

  @patch('/tamanhos/{id}')
  @response(204, {
    description: 'Tamanho PATCH success',
  })
  async updateById(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Tamanho, {partial: true}),
        },
      },
    })
    tamanho: Tamanho,
  ): Promise<void> {
    await this.tamanhoRepository.updateById(id, tamanho);
  }

  @put('/tamanhos/{id}')
  @response(204, {
    description: 'Tamanho PUT success',
  })
  async replaceById(
    @param.path.number('id') id: string,
    @requestBody() tamanho: Tamanho,
  ): Promise<void> {
    await this.tamanhoRepository.replaceById(id, tamanho);
  }

  @del('/tamanhos/{id}')
  @response(204, {
    description: 'Tamanho DELETE success',
  })
  async deleteById(@param.path.number('id') id: string): Promise<void> {
    await this.tamanhoRepository.deleteById(id);
  }
}
