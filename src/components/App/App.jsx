import React from 'react';
import styled from 'styled-components';
import BaseLogo from '../Logo';
import SearchResult from '../SearchResult';
import Grid from '../Grid';
import Sort from '../Sort';

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
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: {
        key: 'price',
        direction: Sort.direction.DESC,
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
          <Grid
            templateColumns="1fr auto"
            alignItems="center;"
          >
            <SearchResult count={5} location="Sydney" />
            <Sort
              items={[{
                key: 'price',
                directions: [Sort.direction.ASC, Sort.direction.DESC],
              }]}
              value={Sort.toValue(sort)}
              onChange={({ target: { value } }) => this.setSort(Sort.fromValue(value))}
            />
          </Grid>
        </SearchQuery>
        <div data-testid="hello-world">Hello World</div>
      </StyledApp>
    );
  }
}

export default App;
