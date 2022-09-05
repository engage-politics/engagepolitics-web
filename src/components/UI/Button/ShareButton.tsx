import type { MouseEventHandler, ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

const ShareButtonWrapper = styled.div`
  max-width: 400px;
  position: relative;
  margin: 7px 0;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 6px;
  background-color: white;
  height: 28px;
  width: 28px;
  border-radius: 50px;

  img {
    position: absolute;
    height: 16px;
    width: 16px;
    top: 6px;
    left: 6px;
    filter: brightness(0) saturate(100%) invert(16%) sepia(41%) saturate(3864%)
      hue-rotate(265deg) brightness(87%) contrast(108%);
  }
`;

const ButtonStyle = tw.a`
  inline-flex
  flex-shrink-0
  my-auto
  bg-purple-700
  w-full

  rounded-lg
  text-center
  cursor-pointer
  font-bold
  p-1.5
  pl-6
  !text-white
`;

type IButtonProps = {
  children: ReactNode;
  imageSrc: string;
  className?: string;
  rel?: string;
  target?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const ShareButton = (props: IButtonProps): JSX.Element => {
  const { children, className, rel, target, onClick, imageSrc } = props;

  return (
    <ShareButtonWrapper>
      <ImageWrapper>
        <img src={imageSrc} />
      </ImageWrapper>
      <ButtonStyle
        className={className}
        rel={rel}
        target={target}
        onClick={onClick}
      >
        {children}
      </ButtonStyle>
    </ShareButtonWrapper>
  );
};

export default ShareButton;
