// Copyright Stefan Milanovic <stefan.fva@gmail.com> 2022. All Rights Reserved.
// Node module: storage-service
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
