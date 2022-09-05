import type { ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

type DropdownStyleProps = {
  $filter?: boolean;
};

const DropdownWrapper = styled.div`
  select {
    -webkit-appearance: menulist-button;
    color: #100160;
  }

  select:invalid {
    color: rgba(16, 1, 96, 0.7);
  }
  width: 100%;
`;

const DropdownStyle = tw.select<DropdownStyleProps>`
  py-1 
  px-4 
  mr-6

  rounded-lg 
  text-sm
  text-blue-500

  w-full
   
  ${(props: any) =>
    props.$filter
      ? 'border-solid border-[1px] border-gray-900'
      : 'border-solid border-2 border-blue-500 border-opacity-20 !my-0 h-9.5 w-full !py-0'}

  bg-white
`;

type IDropdownProps = {
  name?: string;
  children: ReactNode;
  className?: string;
  value?: string;
  onChange?: (e: any) => void;
  $fullWidth?: boolean;
  $filter?: boolean;
};

const DropDown = (props: IDropdownProps): JSX.Element => {
  const { name, children, className, value, onChange, $fullWidth, $filter } =
    props;

  return (
    <DropdownWrapper className={`${$fullWidth ? 'w-full' : 'max-w-[190px]'}`}>
      <DropdownStyle
        required
        name={name}
        className={className}
        value={value}
        onChange={onChange}
        $filter={$filter}
      >
        {children}
      </DropdownStyle>
    </DropdownWrapper>
  );
};

export default DropDown;
