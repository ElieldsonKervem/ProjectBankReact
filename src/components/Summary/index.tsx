import { Container } from "./style"
import  aumentar from "../../assets/aumentar.png"
import  diminuir from "../../assets/diminuir.png"
import moneyMenagement from "../../assets/moneyMenagement.png"
import { useContext } from "react"
import { TransactionsContext } from "../../TramsactionsContext"


export default function Summary (){
    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        }else{
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }
    ,{
        deposits: 0,
        withdraws: 0,
        total: 0
    });
    return(
        <Container>
         
                <div>
                    <header>
                        <p>Entradas</p>
                        <strong>{summary.deposits}</strong>
                    </header>
                    <img src={aumentar} alt="aumentar icone " />
                </div>
          
           
                <div>
                    <header>
                        <p>Retiradas</p>
                        <strong>{summary.withdraws}</strong>
                    </header>
                    <img src={diminuir} alt="diminuir icone " />
                </div>
            
          
                <div>
                     <header>
                        <p>Saldo total</p>
                        <strong>{summary.total}</strong>
                     </header>
                    <img src={moneyMenagement} alt="tota icone " />
                </div>
            
        </Container>
    )
}