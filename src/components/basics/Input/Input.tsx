import { forwardRef } from 'react';
import { InputProps } from './Input.props';
import { InputRef } from '@Constans/htmlConstants';

const Input = forwardRef<InputRef, Omit<InputProps, 'ref'>>(
  ({ value, left, right, max, min, testID, name, placeholder, type, onChange, subText }, ref) => {
    return (
      <div className="gap-2 input-content">
        {left && (
          <div className="input-icon-left">
            <span>{left}</span>
          </div>
        )}
        <label>
          {placeholder}
          <input
            className="input-primary"
            data-testid={testID}
            ref={ref}
            type={type}
            value={value}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            max={max}
            min={min}
          />
        </label>
        {right && (
          <div className="input-icon-right">
            <span>{right}</span>
          </div>
        )}
        <h5 className="text-primary-light-7 mb-1">{subText}</h5>
      </div>
    );
  }
);

export { Input };
