import Pagination from "@Components/composed/Pagination/Pagination";
import Search from "@Components/composed/Search/Search";
import { FormProps } from "./Form.props";
import { InputsConstants } from "@Constans/InputsConstants";

const Form: React.FC<FormProps> = ({search, handleCurried, pagination}) => {

    return (
      <form className="form">
          <Search search={search} handleChange={handleCurried(InputsConstants.SEARCH)} />
          <Pagination pagination={pagination} handleChange={handleCurried(InputsConstants.PAGINATION)} />
      </form>

    );
}

export default Form;

