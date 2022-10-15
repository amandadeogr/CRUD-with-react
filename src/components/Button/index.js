import './Button.css';

const Button = (props) => {
   return (
      <button className={props.className} id={props.id}>{props.name}</button>
   )
}

export default Button;