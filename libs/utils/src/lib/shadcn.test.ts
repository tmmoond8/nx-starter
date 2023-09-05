import { cn } from './shadcn';

describe('utils', () => {
  it('cn test', () => {
    const merged = cn({});
    expect(merged).toBeTruthy();
  });
});
