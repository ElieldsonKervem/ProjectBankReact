
import { styled } from "styled-components";


export const Container = styled.header `
    background: var(--blue);
    
`
export const Content = styled.div `
  max-width: 60rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 1rem 10rem;

  strong{
    color: #fff;
    font-size: 2rem;
  }
  h2{
    font-size: 3rem;
    color: #f3f327
  }
  
  button{
    font-size: 1.2rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 1rem;
    border-radius: 0 .4rem;
    height: 4rem;
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
      transition: filter 0.2s;
    }

  }

`

