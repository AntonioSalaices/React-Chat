import FormField from '@Components/composed/FormField';
import { FormProps } from './Form.props';
import { FaSearch } from 'react-icons/fa';
import { HTMLType } from '@Constans/htmlConstants';

const Form: React.FC<FormProps> = ({ handleSearch, handleFontResize }) => {
  return (
    <div className="col justify-center align-center">
      <FormField
        type={HTMLType.text}
        icon={<FaSearch />}
        subTx="subPlaceholder.search"
        tx="form.inputs.search"
        handleChange={handleSearch}
        testID="searchInput"
      />
      <FormField
        type={HTMLType.range}
        subTx="form.inputs.fontSize"
        handleChange={handleFontResize}
        max="100"
        min="10"
        testID="resizeInput"
      />
    </div>
  );
};
export default Form;
