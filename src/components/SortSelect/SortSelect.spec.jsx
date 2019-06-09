import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import SortSelect from './SortSelect';

describe('SortSelect', () => {
  afterEach(cleanup);

  test('options & title', () => {
    const { getAllByTestId, getByTestId } = render((
      <SortSelect
        options={[{
          key: 'foo',
          directions: [SortSelect.direction.ASC],
        }, {
          key: 'bar',
          directions: [SortSelect.direction.ASC, SortSelect.direction.DESC],
        }]}
        value={{
          key: 'bar',
          direction: SortSelect.direction.ASC,
        }}
        onChange={() => {}}
      />
    ));

    const expectedItems = [{
      value: 'foo-ASC',
      text: 'Foo low-high',
    }, {
      value: 'bar-ASC',
      text: 'Bar low-high',
    }, {
      value: 'bar-DESC',
      text: 'Bar high-low',
    }];

    expect(getByTestId('sort-title')).toHaveTextContent('Sort by');

    getAllByTestId('sort-option').forEach((item, i) => {
      const { value, text } = expectedItems[i];

      expect(item.value).toBe(value);
      expect(item).toHaveTextContent(text);
    });
  });

  test('onChange & value', () => {
    const onSortSpy = sinon.spy();

    const { getByTestId } = render((
      <SortSelect
        options={[{
          key: 'foo',
          directions: [SortSelect.direction.ASC],
        }]}
        value={{
          key: 'foo',
          direction: SortSelect.direction.ASC,
        }}
        onChange={({ target: { value } }) => onSortSpy(value)}
      />
    ));

    const select = getByTestId('sort-select');

    expect(select.value).toBe('foo-ASC');

    const { value } = getByTestId('sort-option');

    fireEvent.change(select, { target: { value } });
    sinon.assert.calledWith(onSortSpy, {
      key: 'foo',
      direction: SortSelect.direction.ASC,
    });
  });
});
