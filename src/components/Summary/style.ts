

import styled from 'styled-components';

export const Container = styled.section `
 display: flex;
 flex-direction: row;
 justify-content: space-around;
 width: 70rem;
 margin: 0 auto;
 transition: ease-in-out 0.4s;


 div{   
        background: var(--shape);
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 10rem;
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        margin-top: -4rem;
        margin-bottom: 4rem;
        margin-right: 1rem;
        margin-left: 1rem;
        box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
        transition: ease-in-out 0.4s;
        p{
            font-size: 1.3rem;
            margin-top: 1rem;
        }
        strong{
            font-size: 2rem;
        }
        img{
            width: 2rem;
            height: 2rem;
        }
        &:hover{
            cursor: pointer;
            transform: scale(1.02);
            transition: ease-in-out 0.4s;
        }
 } 
    div:last-child{
        background: var(--green);
        color: white;
        font-weight: 800;
        img{
            width: 2.5rem;
            height: 2.5rem;
            filter: invert(100%) sepia(100%) brightness(200%);
             -webkit-filter: invert(100%) sepia(100%) brightness(200%);
             -moz-filter: invert(100%) sepia(100%) brightness(200%);
    }
}
`