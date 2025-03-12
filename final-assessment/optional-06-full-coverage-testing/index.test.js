import test from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

// Pengujian angka positif 
test('penjumlahan angka', () => {
  assert.strictEqual(sum(2, 3), 5); 
});

// Pengujian angka negatif
test('sum should return 0 when arguments are negative numbers', () => {
  assert.strictEqual(sum(-2, 3), 0); 
  assert.strictEqual(sum(2, -3), 0);  
});

// Pengujian non-numerik  
test('sum should return 0 when arguments are not numbers', () => {
  assert.strictEqual(sum('a', 3), 0); 
  assert.strictEqual(sum(2, 'b'), 0);  
});
