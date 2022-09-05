import type { MouseEventHandler, ReactNode } from 'react';
import tw from 'tailwind-styled-components';

import { Tooltip } from '../Tooltip/Tooltip';

type ButtonStyleProps = {
  $secondary?: boolean;
  $small?: boolean;
  $donate?: boolean;
  disabled?: boolean;
};

const ButtonStyle = tw.a<ButtonStyleProps>`
  inline-flex
  flex-shrink-0
  my-auto

  ${(props: any) =>
    props.$small
      ? 'px-5 py-1.5 xsm:text-sm text-sm'
      : 'px-6 py-2 text-md xsm:text-md'}

  rounded-full
  text-center
  cursor-pointer
  font-bold
  justify-center

  ${(props: any) =>
    props.$secondary
      ? 'bg-white !text-purple-600 !hover:text-blue-500 border-3 border-purple-600 px-10 lg:px-8 !py-1.5'
      : 'bg-primary !text-white !hover:text-white'}
  ${(props: any) => (props.$donate ? 'bg-blue-50' : '')}
  ${(props: any) => (props.disabled ? 'opacity-50 cursor-not-allowed' : '')}
`;

type IButtonProps = {
  children: ReactNode;
  className?: string;
  rel?: string;
  $secondary?: boolean;
  $donate?: boolean;
  $small?: boolean;
  target?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  tooltip?: string;
};

const Button = (props: IButtonProps): JSX.Element => {
  const {
    children,
    className,
    rel,
    $secondary,
    $donate,
    $small,
    target,
    disabled = false,
    onClick,
    tooltip,
  } = props;

  const mockFn: MouseEventHandler<HTMLAnchorElement> = () => {};

  return (
    <span className="group">
      <ButtonStyle
        className={className}
        rel={rel}
        $secondary={$secondary}
        $donate={$donate}
        $small={$small}
        target={target}
        disabled={disabled}
        onClick={disabled ? mockFn : onClick}
      >
        {children}
      </ButtonStyle>
      {tooltip && tooltip.length > 0 && <Tooltip message={tooltip} />}
    </span>
  );
};

export default Button;
