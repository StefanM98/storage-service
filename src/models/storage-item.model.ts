// Copyright Stefan Milanovic <stefan.fva@gmail.com> 2022. All Rights Reserved.
// Node module: storage-service
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Entity, model, property, belongsTo} from '@loopback/repository';
import { Storage } from './storage.model';

@model()
export class StorageItem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'string',
  })
  barcode?: string;

  @property({
    type: 'string',
    dataType: 'longtext'
  })
  image?: string;

  @belongsTo(() => Storage)
  storageId: number; // relation name will default to `storage`

  
  constructor(data?: Partial<StorageItem>) {
    super(data);
  }
}

export interface StorageItemRelations {
  // describe navigational properties here
}

export type StorageItemWithRelations = StorageItem & StorageItemRelations;
