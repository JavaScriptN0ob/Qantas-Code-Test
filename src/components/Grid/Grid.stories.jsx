import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import Grid from './Grid';

const Item = styled.div`
  background: #3498db;
  color: white;
`;

storiesOf('Components', module)
  .add('Grid', () => (
    <Grid
      templateRows={text('templateRows')}
      templateColumns={text('templateColumns', '1fr 1fr')}
      templateAreas={text('templateAreas')}
      gap={text('gap')}
      columnGap={text('columnGap')}
      rowGap={text('rowGap')}
      alignItems={text('alignItems')}
      justifyItems={text('justifyItems')}
      alignContent={text('alignContent')}
      justifyContent={text('justifyContent')}
    >
      {Array.from({ length: number('length', 2) }, (v, i) => i).map(v => (
        <Item key={v}>
          {`item-${v}`}
        </Item>
      ))}
    </Grid>
  ));
