import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import Sort from './Sort';

describe('Sort', () => {
  afterEach(cleanup);

  test('options & toValue', () => {
    const { getAllByTestId } = render((
      <Sort
        items={[{
          key: 'foo',
          directions: [Sort.direction.ASC],
        }, {
          key: 'bar',
          directions: [Sort.direction.ASC, Sort.direction.DESC],
        }]}
        value=""
        onChange={() => {}}
      />
    ));

    const expectedItems = [{
      value: Sort.toValue({ key: 'foo', direction: Sort.direction.ASC }),
      text: 'Foo low-high',
    }, {
      value: 'bar-ASC',
      text: 'Bar low-high',
    }, {
      value: 'bar-DESC',
      text: 'Bar high-low',
    }];

    getAllByTestId('sort-option').forEach((item, i) => {
      const { value, text } = expectedItems[i];

      expect(item.value).toBe(value);
      expect(item).toHaveTextContent(text);
    });
  });

  test('onChange & value & fromValue', () => {
    const onSortSpy = sinon.spy();

    const { getByTestId } = render((
      <Sort
        items={[{
          key: 'foo',
          directions: [Sort.direction.ASC],
        }]}
        value="foo-ASC"
        onChange={({ target: { value } }) => onSortSpy(Sort.fromValue(value))}
      />
    ));

    const select = getByTestId('sort-select');

    expect(select.value).toBe('foo-ASC');

    const { value } = getByTestId('sort-option');

    fireEvent.change(select, { target: { value } });
    sinon.assert.calledWith(onSortSpy, {
      key: 'foo',
      direction: Sort.direction.ASC,
    });
  });
});
