import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AppDataSource} from '../datasources';
import {Storage, StorageRelations} from '../models';

export class StorageRepository extends DefaultCrudRepository<
  Storage,
  typeof Storage.prototype.id,
  StorageRelations
> {
  constructor(
    @inject('datasources.App') dataSource: AppDataSource,
  ) {
    super(Storage, dataSource);
  }
}
