import { MemoizedInput } from "@Components/basics/InputField/InputField";
import { PaginationProps } from "./Pagination.props";


const Pagination: React.FC<PaginationProps> = ({pagination, handleChange}) => {

    return (
     <div className='search-container'>
        <MemoizedInput value={pagination} type='number' placeholder='Pagination: ' onChange={handleChange} />
     </div>
    );
}

export default Pagination;