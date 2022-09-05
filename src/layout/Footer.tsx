// import Link from 'next/link';
import { Link as RouterLink } from 'react-router-dom';
// import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

import { FooterBar } from '../content/main.content';
import { engageLogo, mainshapeFooter, sideshape7 } from '../utils/imagePaths';

interface FooterContainerProps {
  page: string;
}
const BgFooterContainer = styled.div<FooterContainerProps>`
background-image: url(${sideshape7}), url(${mainshapeFooter});
  background-repeat: no-repeat;
  background-size: 174% 70%,81% 128%;
  // background-position: 10% 100%,left center;
  background-position: ${(props) =>
    props.page === '/demo' ? '10% 1000%,left 6%' : '10% 100%,left 6%'};

  @media only screen and (max-width: 1024px) {
    background-size: 177% 70%,95% 128%;
    // background-position: 0% 100%,-3% 8%;
    background-position:  ${(props) =>
      props.page === '/demo' ? '10% 1000%,-3% 6%' : '0% 100%,-3% 8%'};
  }

  @media only screen and (max-width: 768px) {
    background-size: 177% 70%,100%;
    // background-position: 0% 100%,-3% 8%;
    background-position:  ${(props) =>
      props.page === '/demo' ? '10% 1000%,bottom' : '0% 100%,bottom'};
  }

  @media only screen and (max-width: 640px) {
    background-size: 177% 70%,cover;
    // background-position: 0% 100%,-3% 8%;
    background-position:  ${(props) =>
      props.page === '/demo' ? '10% 1000%,bottom' : '0% 100%,bottom'};
  }
  @media only screen and (max-width: 420px) {
    background-size: 177% 70%,cover;
    // background-position: 0% 100%,-3% 8%;
    background-position:  ${(props) =>
      props.page === '/demo' ? '10% 1000%,bottom' : '0% 100%,bottom'};
  }
  
}


`;

const FooterWrapper = tw.div`
  flex
  md:flex-row
  flex-col
  justify-between

  gap-5
  md:gap-10
  lg:gap-0

  px-8
  py-6
  pt-16
  xsm:px-10
  xsm:py-12
  xsm:pt-24
  text-center
  sm:text-left
  lg:px-24
  xl:px-36

  lg:w-10/12
  w-full
  max-w-6xl
`;

const LogoContainer = tw.div`
`;

const LogoLink = tw.a`
  inline
  items-center
  text-3xl
  font-extrabold

  md:ml-0

  text-blue-500
  bg-primary
  bg-clip-text
  !text-transparent
`;

const CopyrightReserved = tw.div`
  hidden
  md:block
  mt-2
  text-sm
  text-blue-500
  opacity-40
  max-w-xs
`;

const Policies = tw.div`
  flex
  items-left
  flex-col
  justify-end
  text-purple-750
  opacity-80
  cursor-pointer
`;

const PolicyLink = tw.div`
  my-0.5
`;

const SocialHandles = tw.div`
  hidden
  md:flex

  flex-row

  gap-4
  items-end
  md:mb-4
`;

const LogoSocialLink = tw.div`
  flex
  justify-center
  sm:justify-between
`;

const SocialHandlesMobile = tw.div`
  flex
  flex-row

  gap-4
  items-end
  md:mb-4
  md:hidden
`;

const CopyrightReservedMobile = tw.div`
  mt-2
  text-sm
  text-blue-500
  opacity-40
  max-w-xs
  md:mb-4
  md:hidden
`;

// const twitterIconUrl: string = '/assets/images/twitter-icon.svg';
// const linkedinIconUrl: string = '/assets/images/linkedin-icon.svg';

const Footer = () => {
  // const { asPath, pathname } = useRouter();
  // useEffect(() => {
  //   console.log(asPath, pathname);
  // }, []);

  return (
    <BgFooterContainer page="">
      <FooterWrapper>
        <LogoContainer>
          <LogoSocialLink>
            <LogoLink title="Engage">
              {' '}
              <img src={engageLogo}></img>
            </LogoLink>
            <SocialHandlesMobile>
              {/* <SocialIcon uri={linkedinIconUrl} href={AppConfig.linkedinURL} />
              <SocialIcon uri={twitterIconUrl} href={AppConfig.twitterURL} /> */}
            </SocialHandlesMobile>
          </LogoSocialLink>
          <CopyrightReserved>
            {FooterBar.copyrightTitle} <br></br>
            {FooterBar.copyrightName}
            <br></br>
            {FooterBar.copyrightAddress}
          </CopyrightReserved>
        </LogoContainer>
        <Policies>
          <a href="/">
            <PolicyLink>Terms of Service</PolicyLink>
          </a>
          <a href="/">
            <PolicyLink>Privacy Policy</PolicyLink>
          </a>
          <a href="/">
            <PolicyLink>Cookies Policy</PolicyLink>
          </a>
        </Policies>
        <CopyrightReservedMobile>
          {FooterBar.copyrightTitle}
          <br></br>
          {FooterBar.copyrightName}
          <br></br>
          {FooterBar.copyrightAddress}
        </CopyrightReservedMobile>
        <SocialHandles>
          {/* <SocialIcon uri={linkedinIconUrl} href={AppConfig.linkedinURL} />
          <SocialIcon uri={twitterIconUrl} href={AppConfig.twitterURL} /> */}
        </SocialHandles>
      </FooterWrapper>
    </BgFooterContainer>
  );
};

export default Footer;
