import Pagination from '@Components/composed/Pagination';
import Search from '@Components/composed/Search';
import { FormProps } from './Form.props';

const Form: React.FC<FormProps> = ({ handleSearch, handlePagination }) => {
  return (
    <div className="row gap-3 justify-center">
      <Search subTx="subPlaceholder.search" tx="inputs.search" handleChange={handleSearch} />
      <Pagination subTx="subPlaceholder.pagination" tx="inputs.pagination" handleChange={handlePagination} />
    </div>
  );
};
export default Form;
