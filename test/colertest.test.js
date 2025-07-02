import { describe, it, expect } from 'vitest';
import resultColor from '../src/libs/resultColor.js';

describe('resultColor', () => {
  it('大吉ならtext-red-600', () => {
    expect(resultColor('大吉')).toBe('text-red-600');
  });

  it('吉ならtext-yellow-500', () => {
    expect(resultColor('吉')).toBe('text-yellow-500');
  });

  it('中吉ならtext-indigo-500', () => {
  expect(resultColor('中吉')).toBe('text-indigo-500');
  });

  it('小吉ならtext-gray-700', () => {
    expect(resultColor('小吉')).toBe('text-gray-700');
  });

  it('凶ならtext-black', () => {
    expect(resultColor('凶')).toBe('text-black');
  });
});
