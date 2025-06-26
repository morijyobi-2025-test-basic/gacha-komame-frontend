import { describe, it, expect } from 'vitest';
import resultColor from '../src/libs/resultColor.js';

describe('resultColor', () => {
  it('Sならtext-red-500', () => {
    expect(resultColor('S')).toBe('text-red-500');
  });

  it('Aならtext-blue-500', () => {
    expect(resultColor('A')).toBe('text-blue-500');
  });

  it('Bならtext-green-500', () => {
  expect(resultColor('B')).toBe('text-green-500');
  });

  it('Cならtext-gray-600', () => {
    expect(resultColor('C')).toBe('text-gray-600');
  });

  it('その他はtext-black', () => {
    expect(resultColor('X')).toBe('text-black');
  });
});
