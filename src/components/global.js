import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  line-height: 1.8;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  margin:0;
  font-family: 'Raleway', sans-serif!important ;
  font-size:15px;
  line-height:1.5;
}`
;
