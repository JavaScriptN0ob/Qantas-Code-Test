import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchResult from './SearchResult';

describe('SearchResult', () => {
  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(<SearchResult count={5} location="Sydney" />));
  });

  afterEach(cleanup);

  test('text', () => {
    expect(getByTestId('search-result')).toHaveTextContent('5 hotels in Sydney');
  });

  test('count', () => {
    expect(getByTestId('count')).toHaveTextContent('5');
  });

  test('location', () => {
    expect(getByTestId('location')).toHaveTextContent('Sydney');
  });
});
