import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    
    outline: none;
    border: none;

    font-family: 'Inter', sans-serif ;
  }

  :root{
    --pink: #FF577F;
    --pink-focus: #FF427F;
    --pink-focus-negative: #59323F;
    --black: #121214;
    --gray: #343B41;
    --dark-gray: #212529;
    --white-gray: #868E96;
    --white: #F8F9FA;
    --positive-feedback: #3FE864;
    --negative-feedback: #E83F5B;
    --red:rgb(205, 0, 0);
    --shadow-text: rgba(0, 0, 0, 1);
    --shadow-login: rgba(0  , 0, 0, 0.212);
    --shadow-bgmodal: rgba(0, 0, 0, 0.8);
    --shadow-delete-modal: rgba(0, 0, 0, 0.25);

  } 

  body{
    box-sizing: border-box;
    
    background: var(--black);
    color: var(--pink);

    h1,h2,h3,h4, h5,h6{
      font-weight: 700;
    }

    button{
      cursor: pointer;
    }

    ul,ol,li{
      list-style: none;
    }

    a{
      text-decoration: none;
    }
  }
`;

export default GlobalStyle;
