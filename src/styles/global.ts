

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

:root{
   --background: #f0f2f5;
   --red: #e52e4d;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #ffffff;

    --green: #29d637;

}
  
 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
} 

body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
}

 html{
    @media (max-width: 1080px){
        font-size: 93.75%;
    }
    @media (max-width: 720px){
        font-size: 87.5%;
    }
 }
  

 button {
   cursor: pointer;
 }
[disable]{
    opacity: 0.6;
    cursor: not-allowed;
}

.reactModal{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
    border: 0;
    box-shadow: 0 0 0.625rem rgba(0,0,0,0.05);
    margin: 4rem auto;
    position: relative;
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        background: #e7e9ee;
        border: 1px solid #d7d7d7;
        font-weight: 400;
        font-size: 1rem;
        &::placeholder{
            color: var(--text-body);
        }
        & + input{
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--blue);
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    }
}
.overlayModal{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}


`
//o ideal é usar um font size que seja relativo ao tamanho da tela, para que o site seja responsivo
export default GlobalStyle;