import styled from "styled-components";

export const Panel = styled.article`
  background-color: #ffe581;
  border-left: 2px solid #000;
  width: 660px;
  height: calc(
    100vh - 82px
  ); /*stay below header, 82px = header height, header is fixed*/

  position: fixed;
  z-index: 2; /* below header */
  right: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 0 : "-660px"};

  bottom: 0;

  padding: 40px 120px 60px 40px;
  overflow: auto;
  transition: 0.3s;

  @media (max-width: 800px) {
    border-left: none;
    padding: 40px 86px 20px 20px;
    width: 100vw;
    right: unset;
    z-index: 3;

    bottom: ${({ $state }) =>
      $state === "entering" || $state === "entered" ? 0 : "-100vh"};
  }
`;

export const P = styled.p`
  font-family: "Libre Baskerville", serif;
  font-size: 16px;
  line-height: 1.6;
  margin-top: 30px;
`;

export const Em = styled.em`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
`;

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 24px;
  width: 24px;
  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    background: #000;
    width: 2px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 11px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const RoundBtnWrapper = styled.div`
  background: #a7e1f8;
  border: 2px solid #000;
  width: 34px;
  height: 34px;
  border-radius: 30px;
  padding: 8px;

  display: ${({ $state }) => ($state === "entered" ? "grid" : "none")};
  place-content: center;
  overflow: hidden;

  position: fixed;
  top: 120px;
  right: 60px;
  z-index: 4;
  cursor: pointer;

  @media (max-width: 800px) {
    top: unset;
    bottom: 20px;
    right: 40px;
  }
`;

export const BG = styled.div`
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 1;
  opacity: ${({ $state }) =>
    $state === "entering" || $state === "entered" ? 1 : 0};
  pointer-events: ${({ $state }) => ($state === "exited" ? "none" : "auto")};
  transition: 0.3s;
`;
