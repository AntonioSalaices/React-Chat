import {InputFieldProps} from './InputField.props';

const InputField: React.FC<InputFieldProps> = ({value, label, name, placeholder, type, onChange, ref}) => (
  <div className='form-group'>
    {label && <label htmlFor='input-field'>{label}</label>}
    <input
      ref={ref}
      type={type}
      value={value}
      name={name}
      className='form-control'
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
)
export default InputField;