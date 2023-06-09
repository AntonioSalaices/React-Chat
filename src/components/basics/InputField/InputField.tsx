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
  <div className="input-group input-group-sm mb-3">
    {symbol && (
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          {symbol}
        </span>
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
