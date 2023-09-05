import { cn } from './utils';

describe('utils', () => {
  it('cn test', () => {
    const merged = cn({});
    expect(merged).toBeTruthy();
  });
});
