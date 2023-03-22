import styled from 'styled-components';
import { Color, theme } from '@/components/Create/Create.type';

const Box = styled.div<{ color: Color }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 64px;
  font-size: 20px;
  font-weight: bold;

  ${({ color }) => theme[color]}
`;

function Title({ title, color }: { title: string; color: Color }) {
  return <Box color={color}>{title || '작성'}</Box>;
}

export default Title;
