import { css } from 'styled-components';

type Color = keyof typeof theme;

const theme = {
  violet: css`
    background: #7e6fdd;
    box-shadow: 2px 2px 15px rgba(126, 110, 221, 0.5);
    color: #fff;
  `,
  lightViolet: css`
    background: #a094e4;
    box-shadow: 2px 2px 20px rgba(126, 110, 221, 0.5);
    color: #fff;
  `,
  green: css`
    background: #71af8a;
    box-shadow: 2px 2px 15px rgba(113, 175, 138, 0.5);
    color: #fff;
  `,
  blue: css`
    background: #3f8ab5;
    box-shadow: 2px 2px 15px rgba(63, 138, 181, 0.5);
    color: #fff;
  `,
  whiteViolet: css`
    background: #ffffff;
    box-shadow: 2px 2px 10px rgba(126, 110, 221, 0.5);
    color: #4f46af;
  `,
  whiteGreen: css`
    background: #fff;
    box-shadow: 2px 2px 10px rgba(113, 175, 138, 0.5);
    color: #4e705b;
  `,
  whiteBlue: css`
    background: #fff;
    box-shadow: 2px 2px 10px rgba(63, 138, 181, 0.5);
    color: #00639b;
  `,
} as const;

export type { Color };
export { theme };
