import React from 'react';
import tw from 'tailwind-styled-components';

type ToggleStyleProps = {
  $split?: boolean;
};

const Toggle = tw.div<ToggleStyleProps>`
  flex
  items-center
  justify-center
  ${(props: any) => (props.$split ? '' : 'bg-gray-50')}
  rounded-lg
  text-blue-500
  text-opacity-50
  cursor-pointer
  text-sm
`;

const activeStyle = '!bg-blue-500 text-white rounded-lg';

type IToggleProps = {
  $split?: boolean;
  options: Array<String>;
  active: number;
  setActive: (active: number) => void;
  className?: string;
};

const ToggleButton = (props: IToggleProps): JSX.Element => {
  const { $split, options, active, setActive, className } = props;

  const optionStyle = $split ? 'bg-gray-50 rounded-lg' : '';

  const renderToggleOptions = () => {
    return options.map((option, idx) => {
      return (
        <div
          key={idx}
          className={`flex-1 py-2.5 text-center font-bold ${optionStyle} ${
            active === idx ? activeStyle : ''
          }`}
          onClick={() => setActive(idx)}
        >
          {option}
        </div>
      );
    });
  };

  return (
    <Toggle $split={$split} className={className}>
      {renderToggleOptions()}
    </Toggle>
  );
};

export default ToggleButton;
