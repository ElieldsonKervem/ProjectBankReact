import Modal from 'react-modal';
import { Container, ContentButtonsCheck, CheckBox } from './style';
import { useState, FormEvent,useContext } from 'react';
import closer from '../../assets/closer.png';
import api from '../../services/api';

import { TransactionsContext } from '../../TramsactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState<number | undefined>(undefined); 
  const [category, setCategory] = useState('');
   
  const {createTransaction} = useContext(TransactionsContext);

   async function handleWithNewTransaction(event: FormEvent) {
    event.preventDefault();

   
    if (!value || !title || !category) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

     await createTransaction({
      title,
      amount: value,
      category,
      type,
    });
    setTitle('');
    setValue(undefined);
    setCategory('');
    setType('deposit');
    
    onRequestClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} className='reactModal' overlayClassName='overlayModal'>
        <h2>Cadastrar Transação</h2>
        <Container onSubmit={handleWithNewTransaction}>
          <button>
            <img src={closer} alt="Botão de fechar modal" className='btnCloserModal' onClick={onRequestClose} />
          </button>
          <input
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="number"
            placeholder="Valor"
            value={value || ''} // Deixa o campo vazio se o valor for indefinido
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <ContentButtonsCheck>
            <CheckBox
              className='inBtn'
              type='button'
              isActive={type === 'deposit'}
              onClick={() => {
                setType('deposit');
              }}>
              Entrada
            </CheckBox>
            <CheckBox
              className='outBtn'
              type='button'
              isActive={type === 'withdraw'}
              onClick={() => {
                setType('withdraw');
              }}>
              Saída
            </CheckBox>
          </ContentButtonsCheck>
          <input
            placeholder="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    </>
  );
}

export default NewTransactionModal;
