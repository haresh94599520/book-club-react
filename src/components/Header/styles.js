import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

export const Logo = styled(LogoIcon)`
  height: 40px;
  width: 270px;
  display: block;

  @media (max-width: 800px) {
    height: 33px;
    width: 222px;
  }
`;

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 82px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;

  padding: 20px 40px;
  background: #ffbccc;
  border-bottom: 2px solid #000;

  @media (max-width: 800px) {
    padding: 20px;
  }
`;
