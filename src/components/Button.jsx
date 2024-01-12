import { oneOf, string } from 'prop-types';
import styles from './components.module.css';

function Button({type, text, className, ...restProps}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      {...restProps}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  type: oneOf(['button', 'submit', 'reset']),
  text: string,
  className: string,
};

export default Button;
