import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --primary: #000;
    --secondary: #15181C;
    --search: #202327;
    --white: #D9D9D9;
    --gray: #7A7A7A;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    --twitter: #996DFF;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #633BBB; 
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--white);
  }
  
  *, button, input {
    border: 0;
    background: none;
    font: -apple-system, system-ui, blinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    height: 100%;
    width: 100%;
  }

  html {
    background: var(--primary);
  }

`
