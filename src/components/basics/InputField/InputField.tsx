import { isEqual } from 'lodash';
import Home from '../../../screens/home/home';
import {InputFieldProps} from './InputField.props';
import { memo } from 'react';

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
  console.log('prevProps', prevProps.onChange === nextProps.onChange)
  return isEqual(prevProps, nextProps);
});
