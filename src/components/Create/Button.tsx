import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color, theme } from './Create.type';

interface Props {
  width?: string;
  text?: string;
  color: Color;
}

const Box = styled.button<{ width: string; color: Color }>`
  padding: 19px 0;
  width: ${({ width }) => width};
  border-radius: 50px;
  appearance: none;
  border: none;
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;

  ${({ color }) => theme[color]};
`;

function Button({
  width,
  text,
  color,
  ...rest
}: Props & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Box width={width} color={color} {...rest}>
      {text}
    </Box>
  );
}
export default Button;

Button.defaultProps = {
  width: '119px',
  text: '저장하기',
};
