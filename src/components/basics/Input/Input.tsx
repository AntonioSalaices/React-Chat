import { InputProps } from './Input.props';

const Input: React.FC<InputProps> = ({
  value,
  icon,
  max,
  min,
  testID,
  name,
  placeholder,
  type,
  onChange,
  ref,
  subText,
}) => {
  return (
    <div className="gap-2">
      {icon && (
        <div className="input-icon">
          <span>{icon}</span>
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
      <h5 className="text-primary-light-7 mb-2">{subText}</h5>
    </div>
  );
};

export default Input;
