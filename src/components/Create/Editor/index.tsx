import { TextareaHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color, theme } from '../Create.type';

const Box = styled.div<{ color: Color }>`
  box-sizing: border-box;
  background: #ffffff;
  padding: 50px 48px;
  height: 600px;
  border-radius: 50px;
  background: #ffffff;
  overflow-y: scroll;

  ${({ color }) => theme[color]};

  textarea {
    resize: none;
    width: 100%;
    height: 100%;
    appearance: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    border: none;
  }
`;

const Preview = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    width: 50%;
    object-fit: contain;
  }
`;

function Editor({
  src,
  color,
  ...rest
}: {
  src?: string;
  color: Color;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Box color={color}>
      {src && (
        <Preview>
          <img src={src} alt="preview" />
        </Preview>
      )}
      <textarea {...rest} />
    </Box>
  );
}

export default Editor;

Editor.defaultProps = {
  src: '',
};
