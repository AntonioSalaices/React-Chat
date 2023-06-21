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
  <>
    {symbol && (
      <div className="input-icon">
        <span>{symbol}</span>
      </div>
    )}
    <input
      className="input-primary"
      ref={ref}
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  </>
);

export default InputField;
