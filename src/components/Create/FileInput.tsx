import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color, theme } from './Create.type';

interface Props {
  label?: string;
  width?: string;
  accept?: keyof typeof acceptFile;
  color: Color;
}

const Box = styled.div<{ width: string; color: Color }>`
  width: ${({ width }) => width};
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  appearance: none;
  background: #fff;
  box-shadow: 2px 2px 10px rgba(113, 175, 138, 0.5);
  font-size: 20px;
  line-height: 24px;
  cursor: pointer;

  ${({ color }) => theme[color]};

  input[type='file'] {
    display: none;
  }
`;

const acceptFile = {
  image: 'image/*',
  docs: '.doc,.pdf',
};

// TODO tab 안먹음
function FileInput({
  label,
  width,
  color,
  accept = 'image',
  ...rest
}: Props & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Box width={width} color={color}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control, jsx-a11y/no-noninteractive-tabindex */}
      <label htmlFor="file">{label}</label>
      <input type="file" id="file" accept={acceptFile[accept]} {...rest} />
    </Box>
  );
}
export default FileInput;

FileInput.defaultProps = {
  width: '151px',
  label: '+첨부파일',
  accept: 'image',
};
