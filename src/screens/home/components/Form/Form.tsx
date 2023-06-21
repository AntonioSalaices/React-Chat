import Search from '@Components/composed/Search';
import { FormProps } from './Form.props';

const Form: React.FC<FormProps> = ({ handleSearch }) => {
  return (
    <div className="row gap-2 justify-center">
      <Search subTx="subPlaceholder.search" tx="inputs.search" handleChange={handleSearch} />
    </div>
  );
};
export default Form;
