import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cor} from '../models';
import {CorRepository} from '../repositories';

export class CorController {
  constructor(
    @repository(CorRepository)
    public corRepository : CorRepository,
  ) {}

  @post('/cores')
  @response(200, {
    description: 'Cor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cor, {
            title: 'NewCor',
            
          }),
        },
      },
    })
    cor: Cor,
  ): Promise<Cor> {
    return this.corRepository.create(cor);
  }

  @get('/cores/count')
  @response(200, {
    description: 'Cor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cor) where?: Where<Cor>,
  ): Promise<Count> {
    return this.corRepository.count(where);
  }

  @get('/cores')
  @response(200, {
    description: 'Array of Cor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cor) filter?: Filter<Cor>,
  ): Promise<Cor[]> {
    return this.corRepository.find(filter);
  }

  @patch('/cores')
  @response(200, {
    description: 'Cor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cor, {partial: true}),
        },
      },
    })
    cor: Cor,
    @param.where(Cor) where?: Where<Cor>,
  ): Promise<Count> {
    return this.corRepository.updateAll(cor, where);
  }

  @get('/cores/{id}')
  @response(200, {
    description: 'Cor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cor, {exclude: 'where'}) filter?: FilterExcludingWhere<Cor>
  ): Promise<Cor> {
    return this.corRepository.findById(id, filter);
  }

  @patch('/cores/{id}')
  @response(204, {
    description: 'Cor PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cor, {partial: true}),
        },
      },
    })
    cor: Cor,
  ): Promise<void> {
    await this.corRepository.updateById(id, cor);
  }

  @put('/cores/{id}')
  @response(204, {
    description: 'Cor PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cor: Cor,
  ): Promise<void> {
    await this.corRepository.replaceById(id, cor);
  }

  @del('/cores/{id}')
  @response(204, {
    description: 'Cor DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.corRepository.deleteById(id);
  }
}
