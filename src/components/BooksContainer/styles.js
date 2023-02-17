import styled from "styled-components";

export const Container = styled.div`
  background-color: #a7e1f8;
  padding: 80px 40px;
  height: calc(100vh - 82px);
  margin-top: 82px;
  overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? "hidden" : "auto")};

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`;

export const H2 = styled.h2`
  font-size: 42px;
  margin-bottom: 10px;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`;

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 40px;
  row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 60px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
  }
`;
