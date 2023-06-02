import { memo } from 'react';
import { isEqual } from 'lodash';
import {InputFieldProps} from './InputField.props';


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
export const MemoizedInput = memo(InputField, (prevProps, nextProps) => {
  return isEqual(prevProps, nextProps);
});
