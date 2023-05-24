import {InputFieldProps} from './InputField.props';
import '../../../styles/InputField.css';

const InputField: React.FC<InputFieldProps> = ({value, label, name, placeholder, type, onChange, ref}) => (
  <div>
    {label && <label htmlFor='input-field'>{label}</label>}
    <input
      ref={ref}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
)
export default InputField;