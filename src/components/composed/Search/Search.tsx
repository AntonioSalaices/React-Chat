import InputField from "@Components/basics/InputField/InputField";
import { SearchProps } from "./Search.props";
import { FaSearch } from 'react-icons/fa';


const Search: React.FC<SearchProps> = ({search, handleChange}) => {

    return (
        <div className="form-group col-md-6">
            <InputField symbol={<FaSearch />} value={search} type='text' placeholder='Search...' onChange={handleChange} />
        </div>
    );
}

export default Search;