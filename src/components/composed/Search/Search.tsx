import InputField from "@Components/basics/InputField/InputField";
import { SearchProps } from "./Search.props";
import { FaSearch } from 'react-icons/fa';


const Search: React.FC<SearchProps> = ({search, handleChange}) => {

    return (
        <InputField
          symbol={<FaSearch />}
          value={search}
          type='text' 
          placeholder='Search...'
          onChange={handleChange}
         />
    );
}

export default Search;