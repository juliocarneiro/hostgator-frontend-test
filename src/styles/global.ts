import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:none;
  }
  html {
    font-size: 1em;
    background: #F1F6FB 0% 0% no-repeat padding-box;
    color: #1D5297;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Montserrat', sans-serif;
  }
  a{
    opacity:1;
    &:hover{
      opacity:0.7;
      transition: 0.5s ease;
    }
  }
  ul{
    list-style: none;
    padding:0;
  }
  .text-center{
    text-align:center;
  }
  .text-left{
    text-align:left;
  }
  .text-right{
    text-align:right;
  }
  .container{
    width:100%;
    padding-right:15px;
    padding-left:15px;
    margin-right:auto;
    margin-left:auto
    }
    @media (min-width:576px){
      .container{
        max-width:540px
        }
      }
    @media (min-width:768px){
      .container{
        max-width:720px
      }
    }
    @media (min-width:992px){
      .container{
        max-width:960px
      }
    }
    @media (min-width:1200px){
      .container{
        max-width:1140px
      }
    }
    .container-fluid{
      width:100%;
      padding-right:15px;
      padding-left:15px;
      margin-right:auto;
      margin-left:auto
    }
    .rec-carousel{
      .button-prev, .button-next{
        width:35px;
        height:35px;
        position:absolute;
        z-index:9999;
        border:0px;
        background:#4480c5;
        color:white;
        font-weight:bold;
        border-radius:50%;
        top:35%;
        cursor:pointer;
        &:disabled{
          opacity:0.5;
        }
        @media (min-width:1200px){
      display:none;
    }
      }
      .button-prev{
        left:20px;
      }
      .button-next{
        right:20px;
      }
      .rec-slider-container{
        .rec-slider{
          min-height:auto;
        }
      }
    }
`

export default GlobalStyles
