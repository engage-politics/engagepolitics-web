import React from 'react';
import styled from 'styled-components';

const LoadingScreenWrapper = styled.div<{
  width: string;
  height: string;
  strokeWidth: string;
}>`
  .loader {
    position: absolute;
    top: calc(50% - 4em);
    left: calc(50% - 4em);
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border: ${({ strokeWidth }) =>
      `${strokeWidth} solid rgb(181 181 181 / 20%)`};
    border-left: 1em solid #100160;
    border-radius: 50%;
    animation: load8 1.1s infinite linear;
    transition: opacity 0.3s;
  }

  .loader--hide {
    opacity: 0;
  }

  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type ILoadingProps = {
  width?: string;
  height?: string;
  strokeWidth?: string;
};

const LoadingScreen = ({
  width = '6em',
  height = '6em',
  strokeWidth = '1em',
}: ILoadingProps) => {
  return (
    <LoadingScreenWrapper
      width={width}
      height={height}
      strokeWidth={strokeWidth}
    >
      <div className="loader"></div>
    </LoadingScreenWrapper>
  );
};

export default LoadingScreen;
