


import { DashBoard } from "./components/DashBoard";
import Header from "./components/Header";
import  GlobalStyle  from "./styles/global";
import Transections from "./components/Transections";
import Modal from 'react-modal';
import { useState } from "react";

import NewTrasactionModal from "./components/newTransactionModal";
import { TransactionsProvider } from "./TramsactionsContext";

Modal.setAppElement('#root');

function App() {
  
  const [isNewTransactionModalOpen,setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
         <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
         <DashBoard />
          <Transections />

          <NewTrasactionModal isOpen={isNewTransactionModalOpen}  onRequestClose={handleCloseNewTransactionModal}/>
         <GlobalStyle />

    </TransactionsProvider>
  )
}

export default App
