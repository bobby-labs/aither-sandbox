import { test } from 'node:test';
import assert from 'node:assert/strict';
import { page, pageCount } from '../src/paginate.js';

test('counts full pages', () => assert.equal(pageCount(9, 3), 3));
test('returns the second page', () => assert.deepEqual(page([1, 2, 3, 4, 5, 6], 2, 3), [4, 5, 6]));
