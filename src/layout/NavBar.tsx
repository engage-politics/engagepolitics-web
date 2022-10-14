import Hamburger from 'hamburger-react';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useLocation, useNavigate } from "react-router-dom";
import React, { useCallback, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Link as RouterLink } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import { engageLogo } from '../utils/imagePaths';
import styled from 'styled-components';

const Container = tw.nav`
  absolute
  // lg:relative
  z-50
  top-0
  w-full    
  flex
  items-center
  flex-wrap

  px-8
  pt-5
  pr-5
  xsm:px-10
  xsm:pt-6
  xsm:pr-6
  lg:px-24
  xl:px-36
  `;
  // !font-sans

const LogoLink = tw.a`
  z-10

  inline
  items-center
  text-3xl
  font-extrabold

  xsm:pl-0
  md:ml-0

  text-blue-500
  bg-primary
  bg-clip-text
  !text-transparent
`;

const MenuTitle = tw.div`
  text-blue-500
  text-sm
  xsm:text-base
  opacity-80
`;

const MenuToggle = tw.div`
  z-10

  inline-flex
  items-center

  md:pt-1
  ml-auto
  lg:hidden

  text-blue-500
  text-white
  hover:text-white
  outline-none
`;

const MenuContainer = tw.div`
  fixed
  top-0
  left-0
  lg:relative

  w-full
  h-screen
  lg:h-auto
  lg:inline-flex
  lg:flex-grow
  lg:w-auto

  text-center

  bg-white
  lg:bg-transparent

  p-6
  pt-24
  lg:pt-6
  lg:pr-0
`;

const MenuLinks = tw.div`
  items-start
  flex
  flex-col
  w-full
  lg:inline-flex
  lg:flex-row
  lg:ml-auto
  lg:w-auto
  lg:h-auto
  lg:items-center

  p-2
  lg:h-10
  px-6
  py-1

  bg-white
  lg:bg-white
  lg:bg-opacity-60
  lg:rounded-full

`;

const NavAnchorBase = tw.a`
  lg:w-auto
  w-full
  
  px-2
  lg:px-3
  py-4

  lg:text-base
  text-black
  font-medium
  opacity-80
  cursor-pointer
`;
const NavAnchor = styled(NavAnchorBase)`
  &.active {
  color: #A422ED;
  border-bottom: 2px solid #A421ED;
  padding-bottom:8px;
  position:relative;
  top:-4px;
}
`
const NavCTAButton = tw(Button)`
  justify-center
  mt-4
  lg:mt-0
`;


const NavBar = (): JSX.Element => {
  const navigate = useNavigate();
  const [hamburgerActive, setHamburgerActive] = useState(false);


  const handleClick = useCallback((toggled: boolean) => {
    setHamburgerActive(toggled);
  }, []);

  const redirectTo = (path: string) => {
    setHamburgerActive(false);
    navigate(`${path}`);
  };
  const location = useLocation();
  return (
    <Container className={`${hamburgerActive ? 'fixed font-sans' : 'font-sans'}`}>
      <div onClick={() => redirectTo('/')} >
        <LogoLink title="Engage" onClick={() => handleClick(false)}>
          <img className="max-w-[150px]" src={engageLogo} alt="engage_logo"></img>
        </LogoLink>
      </div>
      <MenuToggle>
        <MenuTitle>{hamburgerActive ? 'Close' : 'Menu'}</MenuTitle>
        <Hamburger
          color="#100160"
          size={18}
          onToggle={handleClick}
          toggled={hamburgerActive}
        />
      </MenuToggle>
      <MenuContainer className={`${hamburgerActive ? '' : 'hidden'}`}>
        <MenuLinks>
          {/* {candidateAdminNavLink()} */}
          <NavAnchor className={location.pathname === "/" ? "active" : ""} onClick={() => redirectTo('/')}>Home</NavAnchor>
          <NavAnchor className={location.pathname === "/about" ? "active" : ""} onClick={() => redirectTo('/about')}>About</NavAnchor>
          {/* <NavAnchor onClick={() => redirectTo('/help')}>Feature</NavAnchor> */}
          {/* <NavAnchor className={location.pathname === "/podcast" ? "active" : ""} onClick={() => redirectTo('/podcast')}>Podcast</NavAnchor>
          <NavAnchor className={location.pathname === "/blog" ? "active" : ""} onClick={() => redirectTo('/blog')}>Blog</NavAnchor>  */}
        </MenuLinks>
        <NavCTAButton className={location.pathname === "/demo" ? "active" : ""} onClick={() => redirectTo('/demo')}>
          For Campaigns
        </NavCTAButton>
      </MenuContainer>
    </Container>
  );
};

export default NavBar;
