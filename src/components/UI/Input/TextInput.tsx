import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.div<{
  height: any;
  width: any;
  margin?: any;
  $secondary?: boolean;
  errorMessage?: string;
}>`
  display: inline-block;
  height: ${({ height }) => height};
  width: ${({ width }) => `min(calc(100vw - 32px), ${width})`};
  margin: ${({ margin }) => margin};

  input {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-size: 14px;
    padding-left: 16px;
    padding-right: 8px;
    color: #100160;
    border: ${({ $secondary, errorMessage }) => {
      if (errorMessage) return '2px solid red';
      if ($secondary) return '1px solid #1D0929;';
      return '2px solid rgba(16, 1, 96, 0.2);';
    }};
  }

  input::placeholder {
    color: #100160;
    opacity: 0.7;
  }

  p {
    font-size: 12px;
    color: red;
  }
`;

type IInputProps = {
  type?: string;
  name?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  margin?: string;
  value?: string;
  disabled?: boolean;
  $secondary?: boolean;
  errorMessage?: string;
  onChange?: (e: any) => void;
};

const TextInput = (props: IInputProps): JSX.Element => {
  const height = props.$secondary ? '30px' : props?.height || '40px';
  const width = props?.width || '100%';
  return (
    <InputStyle
      height={height}
      width={width}
      margin={props.margin}
      $secondary={props.$secondary}
      errorMessage={props.errorMessage}
    >
      <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      {props.errorMessage && <p>{props.errorMessage}</p>}
    </InputStyle>
  );
};

export default TextInput;
