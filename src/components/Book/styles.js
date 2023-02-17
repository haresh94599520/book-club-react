import styled from "styled-components";

export const Container = styled.figure`
  cursor: ${({ $insidePanel }) => ($insidePanel ? "default" : "pointer")};
`;

export const Cover = styled.img`
  filter: grayscale(100%);
  border: 2px solid #000;
  object-fit: cover;
  aspect-ratio: 2 / 3;
  width: 100%;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: ${({ $insidePanel }) => ($insidePanel ? "42px" : "28px")};
  margin-bottom: 10px;
  line-height: 1.3;

  @media (max-width: 800px) {
    font-size: ${({ $insidePanel }) => ($insidePanel ? "32px" : "22px")};
  }
`;

export const Author = styled.h4`
  font-family: "Libre Baskerville", serif;
  font-style: italic;
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;
