// Copyright Stefan Milanovic <stefan.fva@gmail.com> 2022. All Rights Reserved.
// Node module: storage-service
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'App',
  connector: process.env.DB_CONNECTOR || 'memory',
  url: process.env.DB_URL,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AppDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'App';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.App', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
