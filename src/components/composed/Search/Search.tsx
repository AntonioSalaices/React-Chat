import { MemoizedInput } from "../../basics/InputField/InputField";
import { SearchProps } from "./Search.props";


const Search: React.FC<SearchProps> = ({search, handleChange}) => {

    return (
     <div className='search-container'>
        <MemoizedInput value={search} type='text' placeholder='Search...' onChange={handleChange} />
     </div>
    );
}

export default Search;