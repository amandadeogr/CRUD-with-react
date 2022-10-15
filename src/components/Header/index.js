import Button from '../Button';
import './Header.css';

const Header = () => {
   return (
      <header className='header'>
         <h1>Cadastro de clientes</h1>
         <Button name="Cadastrar cliente"/>
      </header>
   )
}

export default Header;