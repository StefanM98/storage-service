// Copyright Stefan Milanovic <stefan.fva@gmail.com> 2022. All Rights Reserved.
// Node module: storage-service
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

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
