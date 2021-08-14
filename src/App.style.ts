import styled, { createGlobalStyle } from "styled-components";

//@ts-ignore
import BGImage from "./images/xps.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    * {
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        background-position: center;
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        postion: relative;
        z-index: 10;
    }
   
    body:after {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: -1;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Fascinate Inline", cursive;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }

  .start {
    max-width: 200px;
  }
`;
