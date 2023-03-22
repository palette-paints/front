import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Color, theme } from './Create.type';

interface Props {
  radios: { text: string; value: string }[];
  selectedValue: string;
  color: Color;
}

const Categories = styled.div<{ color: Color }>`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin: 40px auto;
  width: 1120px;
  border-radius: 30px;
  overflow-x: scroll;
  padding: 10px;

  ${({ color }) => theme[color]};

  ::-webkit-scrollbar {
    display: none;
  }
`;

const activeTheme: { [K in any]: any } = {
  whiteViolet: css`
    background: #71af8a;
  `,
  whiteGreen: css`
    background: #71af8a;
  `,
  whiteBlue: css`
    background: #3f8ab5;
  `,
};

const Radio = styled.label<{ color: Color }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  width: 100px;
  font-size: 1em;
  background: #ffffff;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  ${({ color }) => theme[color]};

  :hover,
  &.selected {
    font-weight: bold;
    color: #fff;
    ${({ color }) => activeTheme[color]}
  }

  input[type='radio'] {
    appearance: none;
  }
`;
function RadioButton({
  radios,
  color,
  selectedValue,
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Categories color={color}>
      {radios.map(({ text, value }) => (
        <Radio
          className={value === selectedValue ? 'selected' : ''}
          key={value}
          htmlFor={value}
          color={color}
        >
          {text}
          <input type="radio" value={value} {...rest} id={value} />
        </Radio>
      ))}
    </Categories>
  );
}

export default RadioButton;
