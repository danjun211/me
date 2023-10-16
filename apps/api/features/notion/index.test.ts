import assert from 'node:assert';
import test from 'node:test';
import { config } from 'dotenv';

import { notion } from './index';

test.before(() => {
  config();

  notion.init();
});

test('notion api', async (t) => {
  await t.test('getPage', async () => {
    const data = await notion.getPage('1cee821f1d8e46ca897c4ba828743e2f');

    assert.strictEqual(1, 1);
  });

  await t.test('getUsers', async () => {
    const listUsersResponse = await notion.client.users.list({});

    console.log('listUsersResponse');
    assert.strictEqual(listUsersResponse, true);
  });
});
