import { useState } from "react";
import { Close } from "../DetailsPanel/styles";
import { Input, SearchContainer, SearchIcon, Wrapper } from "./styles";

function Search({ searchTerm, setSearchTerm }) {
  const [showOnDesktop, setShowOnDesktop] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setShowOnDesktop(false);
    setSearchTerm("");
  };

  const showSearch = () => {
    setShowOnDesktop(true);
  };

  return (
    <Wrapper>
      <SearchContainer $showOnDesktop={showOnDesktop}>
        <SearchIcon onClick={showSearch} />
        <Input
          type="text"
          name="search"
          value={searchTerm}
          autoComplete="off"
          onChange={handleChange}
        />
        <Close onClick={clearSearch} />
      </SearchContainer>
    </Wrapper>
  );
}

export default Search;
