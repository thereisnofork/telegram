import { StyledSearch, StyledInput } from './Search.Styles';

// search component in top of chat list
const Search = () => {
  return (
    <StyledSearch>
      <StyledInput type="search" placeholder="Search..." />
    </StyledSearch>
  );
};

export default Search;
