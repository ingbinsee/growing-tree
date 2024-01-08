import styles from './components.module.css';

function Button({type, text, className, ...restProps}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      {...restProps}
    >
      <h3>{text}</h3>
    </button>
  );
}

export default Button;
