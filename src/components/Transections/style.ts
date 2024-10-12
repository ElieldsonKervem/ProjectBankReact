
import styled from 'styled-components';

export const Container = styled.table `
   display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 68rem;
    margin: 0 auto;
    transition: ease-in-out 0.4s;
    border-radius: 4px;
  
    thead{
        text-align: center;
        tr{
            background: var(--shape);
            color: var(--text-title);
            font-weight: 800;
            th{
                padding: 2rem 2rem;
                font-size: 1.4rem;
            }
        }

    }
    tbody{
        tr{
            text-align: center;
            background: var(--shape);
            color: var(--text-body);
            font-weight: 800;
            td{  
                font-size: 1.2rem;
                padding: 2rem 2rem;
            }
            .deposit{
                color: var(--green);
            }
            .withdraw{
                color: var(--red);
            }
        }
    }
    
`

