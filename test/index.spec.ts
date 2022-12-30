import { describe, expect, test } from '@jest/globals';

import { createApi } from "../src/index";

describe('Index Test suite', () => {

  test('Simple test', () => {
    const message = createApi();
    expect(message).toEqual("Test SDK MANAGER NODE");
  });

});
