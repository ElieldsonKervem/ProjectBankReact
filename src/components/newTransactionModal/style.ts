import styled from "styled-components";


export const Container = styled.form`
  .btnCloserModal{
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 1.8rem;
    top: 1.9rem;
    filter: grayscale(99%);
    &:hover{
        filter: grayscale(0%);
        opacity: 0.8;
    }
  }
`;

export const ContentButtonsCheck = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;
    .inBtn{
        background:none;
        color: var(--green);
        border: 1px solid var(--green);
    }
    .outBtn{
        background: none ;
        color: var(--red);
        border: 1px solid var(--red);

        }
 
    `;

interface RadioBoxProps{
    isActive: boolean;
}

export const CheckBox = styled.button<RadioBoxProps>`
  
        width: 48%;
        height: 4rem;
        border-radius: 0.25rem;
        border: 0;
        background: ${(props) => props.isActive ? 'rgba(0,0,0,0.02) !important' : 'var(--red)'};
        color: ${(props) => props.isActive ? 'var(--green)' : 'var(--text-title)'};
        font-size: 1rem;
        transition: filter 0.2s;
        &:hover{
            filter: brightness(0.9);
        }
    

`

