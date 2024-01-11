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

export default Button;
