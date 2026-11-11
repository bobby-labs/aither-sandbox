import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slug.js';

test('joins words with a hyphen', () => assert.equal(slugify('Hello World'), 'hello-world'));
test('drops punctuation', () => assert.equal(slugify('Ship it!'), 'ship-it'));
