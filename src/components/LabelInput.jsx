import { oneOf, string } from 'prop-types';
import { uid } from 'uid';
import styles from './components.module.css';

function LabelInput({labelText, type, placeholder, direction, ...restProps}) {
  const id = uid();
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

LabelInput.propTypes = {
  labelText: string,
  type: oneOf([
    'text',
    'date',
    'button',
    'checkbox',
    'email',
    'file',
    'email',
    'password',
    'radio',
    'submit',
  ]),
  placeholder: string,
  direction: string,
};

export default LabelInput;
