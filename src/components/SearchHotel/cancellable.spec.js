import cancellable, { FREE_CANCELLATION } from './cancellable';

describe('cancellable', () => {
  test('FREE_CANCELLATION', () => {
    const result = cancellable({ cancellationType: FREE_CANCELLATION });

    expect(result).toBe(true);
  });

  test('NOT_REFUNDABLE', () => {
    const result = cancellable({ cancellationType: 'NOT_REFUNDABLE' });

    expect(result).toBe(false);
  });
});
