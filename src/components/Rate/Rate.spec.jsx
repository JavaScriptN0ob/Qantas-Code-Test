import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Rate from './Rate';

describe('Rate', () => {
  afterEach(cleanup);

  test('Circle', () => {
    const { queryAllByTestId } = render(<Rate value={2} type={Rate.type.Circle} />);

    expect(queryAllByTestId('rate-full-circle').length).toBe(2);
    expect(queryAllByTestId('rate-half-circle').length).toBeFalsy();
  });

  test('Star', () => {
    const { queryAllByTestId } = render(<Rate value={2.5} type={Rate.type.Star} />);

    expect(queryAllByTestId('rate-full-star').length).toBe(2);
    expect(queryAllByTestId('rate-half-star').length).toBe(1);
  });

  test('Not full number', () => {
    const { queryAllByTestId, getByTestId } = render(<Rate value={2.123} type={Rate.type.Star} />);

    expect(queryAllByTestId('rate-full-star').length).toBe(2);
    expect(queryAllByTestId('rate-half-star').length).toBe(1);

    const characters = getByTestId('rate').children;

    expect(characters[characters.length - 1].dataset.testid).toBe('rate-half-star');
  });
});
