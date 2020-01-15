import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --container-width: 1240px;
  }

  *,
  *::before,
  *::after { box-sizing: border-box; }

  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.black};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 600;
    line-height: 1;
    color: inherit;
  }

  img { max-width: 100%; }

  figure { margin: 0; }

  form { position: relative; }

  button,
  a {
    outline: none;

    &::-moz-focus-inner { border: 0; }

    &:not(:disabled) { cursor: pointer; }
  }
`;

export default GlobalStyle;
