import { InputFieldProps } from "./InputField.props";

const InputField: React.FC<InputFieldProps> = ({
  value,
  symbol,
  name,
  placeholder,
  type,
  onChange,
  ref,
}) => (
  <div className="input-group">
    {symbol && (
      <div className="input-icon">
        <span>{symbol}</span>
      </div>
    )}
    <input
      className="form-control"
      ref={ref}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default InputField;
