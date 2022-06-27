// Copyright Stefan Milanovic <stefan.fva@gmail.com> 2022. All Rights Reserved.
// Node module: storage-service
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {StorageServiceApplication} from '../..';
import {
  createRestAppClient,
  givenHttpServerConfig,
  Client,
} from '@loopback/testlab';

export async function setupApplication(): Promise<AppWithClient> {
  const restConfig = givenHttpServerConfig({
    // Customize the server configuration here.
    // Empty values (undefined, '') will be ignored by the helper.
    //
    // host: process.env.HOST,
    // port: +process.env.PORT,
  });

  const app = new StorageServiceApplication({
    rest: restConfig,
  });

  await app.boot();
  await app.start();

  const client = createRestAppClient(app);

  return {app, client};
}

export interface AppWithClient {
  app: StorageServiceApplication;
  client: Client;
}
