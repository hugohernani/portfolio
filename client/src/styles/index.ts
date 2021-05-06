import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background-color: rgb(72, 172, 194);
    font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  a {
    color: whitesmoke;
  }

  #root{
    // max-width: 1060px;
    margin: 0 auto;
    // padding: 40px 20px;
  }

  #root.open-modal{
    position: fixed;
    height: 100vh;
    overflow-y: overlay;
  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  a.active{
    color: white;
  }
`;
