import { HeaderContainer, Logo } from "./styles";

function Header({ children }) {
  return (
    <HeaderContainer>
      <a href="/">
        <Logo title="Book Club Logo" />
      </a>
      {children}
    </HeaderContainer>
  );
}

export default Header;
