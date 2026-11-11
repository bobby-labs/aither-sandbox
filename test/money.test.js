import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatUsdc } from '../src/money.js';

test('formats whole and fractional USDC', () => assert.equal(formatUsdc(1_500_000n), '1.50'));
test('rounds down', () => assert.equal(formatUsdc(12_349_999n), '12.34'));
