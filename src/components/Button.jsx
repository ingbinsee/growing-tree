import styles from "./components.module.css";

function Button({type, text, className}) {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
}

export default Button;
