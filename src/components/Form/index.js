import FormField from '../FormField';
import './Form.css';

const Form = () => {
   return (
      <form>
         <FormField type="text" className="form-field" id="name" placeholder="Nome do cliente"/>
         <FormField type="email" className="form-field" id="email" placeholder="Email do cliente"/>
         <FormField type="date" className="form-field" id="birthDate" />
      </form>
   )
}

export default Form;