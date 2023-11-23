import { FormField } from '@Components/Core';
import { FormProps } from './Form.props';
import { HTMLType } from '@Constants/Core';

const Form: React.FC<FormProps> = ({ handleSearch, handleFontResize }) => {
  return (
    <div className="col justify-center align-center">
      <FormField
        type={HTMLType.text}
        subTx="subPlaceholder.search"
        tx="form.inputs.search"
        onChange={handleSearch}
        testID="searchInput"
      />
      <FormField
        type={HTMLType.range}
        tx="form.inputs.fontSize"
        onChange={handleFontResize}
        max="100"
        min="50"
        testID="resizeInput"
      />
    </div>
  );
};
export default Form;
