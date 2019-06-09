import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchResult from './SearchResult';

describe('SearchResult', () => {
  let getByTestId;

  beforeEach(() => {
    ({ getByTestId } = render(<SearchResult count={5} location="Sydney" />));
  });

  afterEach(cleanup);

  test('Text', () => {
    expect(getByTestId('search-result')).toHaveTextContent('5 hotels in Sydney');
  });

  test('Count', () => {
    expect(getByTestId('count')).toHaveTextContent('5');
  });

  test('Location', () => {
    expect(getByTestId('location')).toHaveTextContent('Sydney');
  });
});
