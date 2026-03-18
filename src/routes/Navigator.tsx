import { NavLink } from 'react-router-dom';
import img from './mcnc.png';
import { Header, ImgWrap, Nav, NavItem, NavList } from './styles';

export const Navigator = () => {
  return (
    <Header>
      <Nav>
        <NavList>
          <ImgWrap>
            <img alt="mcnc" src={img} />
          </ImgWrap>
          <NavItem>
            <NavLink to="/home">首页</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/competition/current">本期赛事</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/competition/history">往期赛事</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/competition/lan">LAN</NavLink>
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
