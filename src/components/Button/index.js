import './Button.css';

const Button = (props) => {
   return (
      <button className={'button header-button'}>{props.name}</button>
   )
}

export default Button;