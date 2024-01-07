import styles from "./components.module.css";

function Button({type, text, color}) {
  return (
    <button type={type} className={`${styles.button} ${color}`}>
      {text}
    </button>
  );
}

export default Button;
