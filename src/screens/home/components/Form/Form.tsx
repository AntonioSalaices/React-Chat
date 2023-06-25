import FormField from '@Components/composed/FormField';
import { FormProps } from './Form.props';
import { FaSearch } from 'react-icons/fa';
import { HTMLType } from '@Constans/htmlConstants';

const Form: React.FC<FormProps> = ({ handleSearch }) => {
  return (
    <div className="row gap-2 justify-center">
      <FormField
        type={HTMLType.text}
        icon={<FaSearch />}
        subTx="subPlaceholder.search"
        tx="form.inputs.search"
        handleChange={handleSearch}
      />
    </div>
  );
};
export default Form;
