// Copyright Stefan Milanovic <stefan.fva@gmail.com> 2022. All Rights Reserved.
// Node module: storage-service
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
import {StorageItem} from '../models';
import {StorageItemRepository} from '../repositories';

export class StorageItemController {
  constructor(
    @repository(StorageItemRepository)
    public storageItemRepository : StorageItemRepository,
  ) {}

  @post('/items')
  @response(200, {
    description: 'StorageItem model instance',
    content: {'application/json': {schema: getModelSchemaRef(StorageItem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StorageItem, {
            title: 'NewStorageItem',
            exclude: ['id'],
          }),
        },
      },
    })
    storageItem: Omit<StorageItem, 'id'>,
  ): Promise<StorageItem> {
    return this.storageItemRepository.create(storageItem);
  }

  @get('/items/count')
  @response(200, {
    description: 'StorageItem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(StorageItem) where?: Where<StorageItem>,
  ): Promise<Count> {
    return this.storageItemRepository.count(where);
  }

  @get('/items')
  @response(200, {
    description: 'Array of StorageItem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(StorageItem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(StorageItem) filter?: Filter<StorageItem>,
  ): Promise<StorageItem[]> {
    return this.storageItemRepository.find(filter);
  }

  @patch('/items')
  @response(200, {
    description: 'StorageItem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StorageItem, {partial: true}),
        },
      },
    })
    storageItem: StorageItem,
    @param.where(StorageItem) where?: Where<StorageItem>,
  ): Promise<Count> {
    return this.storageItemRepository.updateAll(storageItem, where);
  }

  @get('/items/{id}')
  @response(200, {
    description: 'StorageItem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(StorageItem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(StorageItem, {exclude: 'where'}) filter?: FilterExcludingWhere<StorageItem>
  ): Promise<StorageItem> {
    return this.storageItemRepository.findById(id, filter);
  }

  @patch('/items/{id}')
  @response(204, {
    description: 'StorageItem PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(StorageItem, {partial: true}),
        },
      },
    })
    storageItem: StorageItem,
  ): Promise<void> {
    await this.storageItemRepository.updateById(id, storageItem);
  }

  @put('/items/{id}')
  @response(204, {
    description: 'StorageItem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() storageItem: StorageItem,
  ): Promise<void> {
    await this.storageItemRepository.replaceById(id, storageItem);
  }

  @del('/items/{id}')
  @response(204, {
    description: 'StorageItem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.storageItemRepository.deleteById(id);
  }
}
