import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const SocialIconWrapper = tw.div`
  flex 
  h-8
  w-8
  md:h-10 
  md:w-10 
  items-center 
  justify-center 
  rounded-full 
  bg-primary
`;

const Img = styled.img`
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(1187%)
    hue-rotate(299deg) brightness(122%) contrast(100%) !important;
`;

type ImageProps = {
  uri: string;
  href: string;
};

const SocialIcon = ({ uri, href }: ImageProps) => {
  return (
    <SocialIconWrapper>
      <a
        className="cursor-pointer"
        target="_blank"
        href={href}
        rel="noreferrer"
      >
        <Img className="h-4 w-4 md:h-5 md:w-5" src={uri} />
      </a>
    </SocialIconWrapper>
  );
};

export default SocialIcon;
