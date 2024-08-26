import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }


  /* media quieries para responsividade baseada no font-size */
  html {
      @media ( max-width: 1080px) {
          font-size: 93.75%; /* 15px */
      }
      @media ( max-width: 720px) {
          font-size: 87.5%; /* 14px */
      }
      @media ( max-width: 480px) {
          font-size: 81.25%; /* 13px */
      }
      @media ( max-width: 300px) {
          font-size: 62.5%; /* 10px */
      }
  }

  #root,
  body,
  html, .olmap{
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
  }

  body {
      -webkit-font-smoothing: antialiased;
      background: #FAFAFA;
      overflow: hidden;
  }

  body, input, textarea, button {
      font-family: 'Metropolis', sans-serif;
      font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
  }

  button {
      cursor: pointer;
  }

  [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
  }


  /* SCROLLBAR */
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 16px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  .mapboxgl-ctrl-top-right{
      width: 50%;
  }

  /* .infinite-scroll-component {
      height: 80vh !important;
  } */

    /* ------------------------------------- */
  .legend {
    line-height: 18px;
    color: #555;
    /* border: 1px solid black; */
    border-radius: 5px;
  }

  .legend i {
    width: 34px;
    height: 8px;
    float: left;
    opacity: 1;
  }

  .mapboxgl-ctrl-bottom-right {
    z-index: 1;
  }

  .mapboxgl-ctrl-bottom-left {
    z-index: 0;
  }

  .pac-container {
    z-index: 999999999;
  }

  .infinite-scroll-component {
    min-height: 70vh !important;
  }

  .SnackbarContent-root, .SnackbarItem-contentRoot, .SnackbarItem-variantError, .SnackbarItem-wrappedRoot{
    z-index: 10000 !important;
  }

  :root {
    --pagination-color: #646464;
    --pagination-hover-color: #646464;
    --pagination-font-size: 0.7rem;
    --pagination-padding-x: 0.5rem ;
    --pagination-padding-y: 0.2rem;
  }  
`;
