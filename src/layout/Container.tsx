import type { ReactNode } from 'react';
import React from 'react';
import tw from 'tailwind-styled-components';

const Section = tw.section`

 
  px-8
  xsm:px-10
  lg:px-24
  xl:px-36
  pt-32
  lg:pt-16
  lg:pb-16
  sm:w-100

  xxs:w-screen
  `;
// xxs:bg-black
// xxs:border-solid border-2 border-sky-500

type IContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Container = (props: IContainerProps): JSX.Element => (
  <Section id={props.id} className={props.className}>
    {props.children}
  </Section>
);

export default Container;
