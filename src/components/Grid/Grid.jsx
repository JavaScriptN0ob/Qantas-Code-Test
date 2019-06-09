import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  ${({
    templateRows,
    templateColumns,
    templateAreas,
    gap,
    columnGap,
    rowGap,
    alignItems,
    justifyItems,
    alignContent,
    justifyContent,
  }) => css`
    grid-template-rows: ${templateRows};
    grid-template-columns: ${templateColumns};
    grid-template-areas: ${templateAreas};
    grid-gap: ${gap};
    grid-column-gap: ${columnGap};
    grid-row-gap: ${rowGap};
    align-items: ${alignItems};
    justify-items: ${justifyItems};
    align-content: ${alignContent};
    justify-content: ${justifyContent};
  `}
`;

const Grid = ({
  children,
  templateRows,
  templateColumns,
  templateAreas,
  gap,
  columnGap,
  rowGap,
  alignItems,
  justifyItems,
  alignContent,
  justifyContent,
}) => (
  <StyledGrid
    templateRows={templateRows}
    templateColumns={templateColumns}
    templateAreas={templateAreas}
    gap={gap}
    columnGap={columnGap}
    rowGap={rowGap}
    alignItems={alignItems}
    justifyItems={justifyItems}
    alignContent={alignContent}
    justifyContent={justifyContent}
  >
    {children}
  </StyledGrid>
);

Grid.defaultProps = {
  templateRows: undefined,
  templateColumns: undefined,
  templateAreas: undefined,
  gap: undefined,
  columnGap: undefined,
  rowGap: undefined,
  alignItems: undefined,
  justifyItems: undefined,
  alignContent: undefined,
  justifyContent: undefined,
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  templateRows: PropTypes.string,
  templateColumns: PropTypes.string,
  templateAreas: PropTypes.string,
  gap: PropTypes.string,
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  alignItems: PropTypes.string,
  justifyItems: PropTypes.string,
  alignContent: PropTypes.string,
  justifyContent: PropTypes.string,
};

export default Grid;
