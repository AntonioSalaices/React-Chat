import Input from '@Components/basics/Input';
import { FormFieldProps } from './FormField.props';
import { translate } from '@Translate/translate';

const FormField: React.FC<FormFieldProps> = ({
  type,
  icon,
  search,
  handleChange,
  txOptions,
  text,
  tx,
  subTx,
  subText,
  testID,
  max,
  min,
}) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;
  const i18SubText = subTx && translate(subTx, txOptions);
  const subContent = i18SubText || subText;

  return (
    <div className="col-11-xs col-11-sm col-5-md col-5-xl">
      <Input
        icon={icon}
        testID={testID}
        value={search}
        type={type}
        placeholder={content}
        subText={subContent}
        onChange={handleChange}
        max={max}
        min={min}
      />
    </div>
  );
};

export default FormField;
