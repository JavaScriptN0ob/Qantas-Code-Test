import React from 'react';
import styled from 'styled-components';
import BaseLogo from '../Logo';
import SearchResult from '../SearchResult';
import SearchHotels from '../SearchHotels';
import SortSelect from '../SortSelect';
import { results } from '../../data.json';
import sortHotels from './sortHotels';

const StyledApp = styled.div`
  margin: 1rem auto;
  height: 100vh;
  width: 1080px;
`;

const Logo = styled(BaseLogo)`
  height: 2.5rem;
`;

const SearchQuery = styled.div`
  margin: 2.5rem 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    const sort = {
      key: 'price',
      direction: SortSelect.direction.DESC,
    };

    const hotels = sortHotels(results, sort);

    this.state = {
      sort,
      hotels,
    };
  }

  setSort(sort) {
    this.setState(({ hotels }) => {
      const newHotels = sortHotels(hotels, sort);

      return {
        sort,
        hotels: newHotels,
      };
    });
  }

  render() {
    const { sort, hotels } = this.state;

    return (
      <StyledApp>
        <h1>
          <Logo />
        </h1>
        <SearchQuery>
          <SearchResult count={hotels.length} location="Sydney" />
          <SortSelect
            options={[{
              key: 'price',
              directions: [SortSelect.direction.ASC, SortSelect.direction.DESC],
            }]}
            value={sort}
            onChange={({ target: { value } }) => this.setSort(value)}
          />
        </SearchQuery>
        <SearchHotels hotels={hotels} />
      </StyledApp>
    );
  }
}

export default App;
