import { styled } from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderWrapper>
      <HomeLogo>Logo</HomeLogo>
      <HomeLinkContainer></HomeLinkContainer>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const HomeLogo = styled.div``;
const HomeLinkContainer = styled.div`
  display: flex;
  width: 650px;
  justify-content: space-between;
`;
