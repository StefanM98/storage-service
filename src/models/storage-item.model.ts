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
