import './FormField.css';

const FormField = (props) => {
   return (
      <input type={props.type} className={props.className} id={props.id} placeholder={props.placeholder} required />
   )
}

export default FormField;