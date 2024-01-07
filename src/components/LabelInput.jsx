import styles from './components.module.css';

function LabelInput({labelText, type, placeholder, direction}) {
  return (
    <div
      className={`${styles.labelInput}
        ${direction === 'row' && styles.row}
      `}
    >
      <label className={direction === 'row' && styles.rowLabel}>
        {labelText}
      </label>
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default LabelInput;
