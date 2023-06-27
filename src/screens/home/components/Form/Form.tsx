import { FormField } from '@Components/Core';
import { FormProps } from './Form.props';
import { HTMLType } from '@Constans/htmlConstants';

const Form: React.FC<FormProps> = ({ handleSearch, handleFontResize }) => {
  return (
    <div className="col justify-center align-center">
      <FormField
        type={HTMLType.text}
        subTx="subPlaceholder.search"
        tx="form.inputs.search"
        handleChange={handleSearch}
        testID="searchInput"
      />
      <FormField
        type={HTMLType.range}
        tx="form.inputs.fontSize"
        handleChange={handleFontResize}
        max="100"
        min="50"
        testID="resizeInput"
      />
    </div>
  );
};
export default Form;
