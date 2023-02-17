import styled from "styled-components";
import { ReactComponent as SearchSVG } from "../../assets/search.svg";

export const SearchContainer = styled.div`
  border: 2px solid #000;
  height: 40px;
  /* width: 420px; */
  border-radius: 30px;
  padding: 8px;

  background: #a7e1f8;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ $showOnDesktop }) => ($showOnDesktop ? "420px" : "40px")};
  transition: all 0.3s ease-in-out;

  input,
  button {
    display: ${({ $showOnDesktop }) => ($showOnDesktop ? "block" : "none")};

    @media (max-width: 800px) {
      display: block;
    }
  }

  @media (max-width: 800px) {
    width: calc(100vw - 40px);
  }
`;

export const Input = styled.input`
  font-family: "Work Sans", sans-serif;
  font-weight: 700;
  font-size: 18px;
  flex-grow: 1;
  background: inherit;
  border: none;
  padding: 6px;
  box-sizing: border-box;
  outline: none;
`;

export const SearchIcon = styled(SearchSVG)`
  width: 20px;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffbccc;
    border-top: 2px solid #000;

    width: 100vw;
    height: 64px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;
