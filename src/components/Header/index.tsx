import { Container, Content } from "./style";
import { useState } from "react";
import Modal from "react-modal";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header({onOpenNewTransactionModal}: HeaderProps) {
 
  
  return (
    <Container>
      <Content>  
        <h2> <strong>React</strong> Money</h2>
        <button type="button" onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    
    </Container>
  );
}

export default Header;