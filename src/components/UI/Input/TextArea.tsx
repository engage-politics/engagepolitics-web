import React from 'react';
import styled from 'styled-components';

const InputStyle = styled.div<{ height: any; width: any; margin?: any }>`
  display: inline-block;
  height: ${({ height }) => height};
  width: ${({ width }) => `min(calc(100vw - 32px), ${width})`};
  margin: ${({ margin }) => margin};

  textarea {
    width: 100%;
    height: 100%;
    border-radius: 14px;
    font-size: 14px;
    padding: 10px 14px;
    color: #100160;
    border: 2px solid rgba(0, 0, 0, 0.2);
  }
`;

type IInputProps = {
  name?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  margin?: string;
  value?: string;
  readOnly?: boolean;
  onChange?: (e: any) => void;
};

const TextArea = (props: IInputProps): JSX.Element => {
  return (
    <InputStyle height={props.height} width={props.width} margin={props.margin}>
      <textarea
        name={props.name}
        placeholder={props.placeholder ? props.placeholder : ''}
        value={props.value}
        onChange={props.onChange}
        readOnly={props.readOnly}
      />
    </InputStyle>
  );
};

export default TextArea;
