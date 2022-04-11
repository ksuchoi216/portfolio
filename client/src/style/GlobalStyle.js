import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');

  * {
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  
  h1 {
    font-size: 34px;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 2px;
  }
  
  input {
    margin: 4px;
    padding: 4px;
    width: 400px;
    font-size: 18px;
  }
  
  button {
    background-color: #1abc9c !important; /* Green */
    color: #ffffff !important;
    border-color: #ffffff !important;
    padding: 4px;
    width: 100px;
  }
  
  .buttonWapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
  }

  .bg-basis {
    background-color: #1abc9c !important; /* Green */
    color: #ffffff !important;
    border-color: #ffffff !important;
  }

  `;

export default GlobalStyle;
