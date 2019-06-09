import React from 'react';
import styled from 'styled-components';
import BaseLogo from '../Logo';
import SearchResult from '../SearchResult';
import SortSelect from '../SortSelect';

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

    this.state = {
      sort: {
        key: 'price',
        direction: SortSelect.direction.DESC,
      },
    };
  }

  setSort(sort) {
    this.setState({
      sort,
    });
  }

  render() {
    const { sort } = this.state;

    return (
      <StyledApp>
        <Logo />
        <SearchQuery>
          <SearchResult count={5} location="Sydney" />
          <SortSelect
            options={[{
              key: 'price',
              directions: [SortSelect.direction.ASC, SortSelect.direction.DESC],
            }]}
            value={sort}
            onChange={({ target: { value } }) => this.setSort(value)}
          />
        </SearchQuery>
        <div data-testid="hello-world">Hello World</div>
      </StyledApp>
    );
  }
}

export default App;
