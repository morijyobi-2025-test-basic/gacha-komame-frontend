import { describe, it, expect } from 'vitest';
import resultColor from '../src/libs/resultColor.js';

describe('resultColor', () => {
  it('Sなら#ff0000', () => {
    expect(resultColor('S')).toBe('#ff0000');
  });

  it('Aなら#0000ff', () => {
    expect(resultColor('A')).toBe('#0000ff');
  });

  it('Bなら#00ff00', () => {
  expect(resultColor('B')).toBe('#00ff00');
  });

  it('Cなら#808080', () => {
    expect(resultColor('C')).toBe('#666666');
  });

  it('その他は#000000', () => {
    expect(resultColor('D')).toBe('#000000');
  });
});
