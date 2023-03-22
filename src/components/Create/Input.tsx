import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Color, theme } from './Create.type';

interface Props {
  width?: string;
  height?: string;
  color: Color;
}

const activeTheme: { [K in any]: any } = {
  violet: css`
    color: #fff;
    background: #7e6fdd;
  `,
  green: css`
    color: #fff;
    background: #71af8a;
  `,
  blue: css`
    color: #fff;
    background: #3f8ab5;
  `,
  lightViolet: css`
    color: #fff;
  `,
};

const Box = styled.input<{ color: Color }>`
  box-sizing: border-box;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding: 19px 30px;
  border-radius: 50px;
  appearance: none;
  border: none;
  font-size: 20px;
  line-height: 24px;
  ${({ color }) => theme[color]};

  &::placeholder {
    ${({ color }) => activeTheme[color]};
  }
`;

function Input({
  width,
  height,
  color,
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return <Box width={width} height={height} color={color} {...rest} />;
}
export default Input;

Input.defaultProps = {
  width: 'fit-content',
  height: '62px',
};
