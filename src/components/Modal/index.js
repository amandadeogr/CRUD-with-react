import Button from '../Button';
import Form from '../Form';
import './Modal.css';

const Modal = () => {
   return (
      <div className='modal'>
         <div className='modal-content'>
            <header className='modal-header'>
               <h2>Novo cliente</h2>
            </header>

            <Form />

            <footer className='modal-footer'>
               <Button name="Fechar"/>
               <Button name="Cadastrar"/>
            </footer>
         </div>
      </div>
   )
}

export default Modal;