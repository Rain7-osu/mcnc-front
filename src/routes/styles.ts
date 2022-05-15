import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #18171c;
`;

export const MainWrapper = styled.div`
  max-width: 1000px;
  padding: 60px 0 160px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const Header = styled.header`
  width: 100%;
  height: 60px;
  box-shadow: 0 6px 16px -8px #00000014, 0 9px 8px #0000000d, 0 12px 48px 16px #00000008;;
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: #5639ac;
`;

export const Nav = styled.nav`
  max-width: 1000px;
  height: 60px;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
`;

export const NavItem = styled.li`
  height: 60px;
  
  a {
    height: 60px;
    padding: 0 20px;
    line-height: 60px;
    white-space: nowrap;
    color: #ffffff;
  }
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 64px;
  background-color: #24222a;
  
  .footer-team {
    color: #ffffff;
    font-weight: bold;
  }
  
  .footer-power {
    margin-top: 10px;
    font-size: 10px;
    color: #948fa3;

    a {
      color: #948fa3;
      font-weight: bold;
    }
  }
`;
