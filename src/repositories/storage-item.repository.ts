import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AppDataSource} from '../datasources';
import {StorageItem, StorageItemRelations} from '../models';

export class StorageItemRepository extends DefaultCrudRepository<
  StorageItem,
  typeof StorageItem.prototype.id,
  StorageItemRelations
> {
  constructor(
    @inject('datasources.App') dataSource: AppDataSource,
  ) {
    super(StorageItem, dataSource);
  }
}
