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
import {Material} from '../models';
import {MaterialRepository} from '../repositories';

export class MaterialController {
  constructor(
    @repository(MaterialRepository)
    public materialRepository : MaterialRepository,
  ) {}

  @post('/materiais')
  @response(200, {
    description: 'Material model instance',
    content: {'application/json': {schema: getModelSchemaRef(Material)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Material, {
            title: 'NewMaterial',
            
          }),
        },
      },
    })
    material: Material,
  ): Promise<Material> {
    return this.materialRepository.create(material);
  }

  @get('/materiais/count')
  @response(200, {
    description: 'Material model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Material) where?: Where<Material>,
  ): Promise<Count> {
    return this.materialRepository.count(where);
  }

  @get('/materiais')
  @response(200, {
    description: 'Array of Material model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Material, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Material) filter?: Filter<Material>,
  ): Promise<Material[]> {
    return this.materialRepository.find(filter);
  }

  @patch('/materiais')
  @response(200, {
    description: 'Material PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Material, {partial: true}),
        },
      },
    })
    material: Material,
    @param.where(Material) where?: Where<Material>,
  ): Promise<Count> {
    return this.materialRepository.updateAll(material, where);
  }

  @get('/materiais/{id}')
  @response(200, {
    description: 'Material model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Material, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Material, {exclude: 'where'}) filter?: FilterExcludingWhere<Material>
  ): Promise<Material> {
    return this.materialRepository.findById(id, filter);
  }

  @patch('/materiais/{id}')
  @response(204, {
    description: 'Material PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Material, {partial: true}),
        },
      },
    })
    material: Material,
  ): Promise<void> {
    await this.materialRepository.updateById(id, material);
  }

  @put('/materiais/{id}')
  @response(204, {
    description: 'Material PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() material: Material,
  ): Promise<void> {
    await this.materialRepository.replaceById(id, material);
  }

  @del('/materiais/{id}')
  @response(204, {
    description: 'Material DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.materialRepository.deleteById(id);
  }
}
