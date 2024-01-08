import styles from './components.module.css';
import {v4 as uuidv4} from 'uuid';

function LabelInput({labelText, type, placeholder, direction, ...restProps}) {
  const id = uuidv4();
  return (
    <div
      className={`${styles.labelInput}
        ${direction === 'row' && styles.row}
      `}
    >
      <label className={direction === 'row' && styles.rowLabel} htmlFor={id}>
        <h3>{labelText}</h3>
      </label>
      <input type={type} id={id} placeholder={placeholder} {...restProps} />
    </div>
  );
}

export default LabelInput;
