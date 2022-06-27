import {Entity, model, property} from '@loopback/repository';

@model()
export class Storage extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'object',
  })
  location?: object;


  constructor(data?: Partial<Storage>) {
    super(data);
  }
}

export interface StorageRelations {
  // describe navigational properties here
}

export type StorageWithRelations = Storage & StorageRelations;
