import { NavLink } from 'react-router-dom';
import { Header, Nav, NavItem, NavList } from './styles';

export const Navigator = () => {
  return (
    <Header>
      <Nav>
        <NavList>
          <NavItem>
            <NavLink to="/home">MCNC 官网</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/competition/current">本期赛事</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/competition/history">往期赛事</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/tryout">Tryout</NavLink>
          </NavItem>
          {/*<NavItem>*/}
          {/*  <NavLink to="/tryout/upload">Tryout 上传</NavLink>*/}
          {/*</NavItem>*/}
        </NavList>
      </Nav>
    </Header>
  );
};
