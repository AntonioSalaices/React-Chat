import { MemoizedInput } from "@Components/basics/InputField/InputField";
import { PaginationProps } from "./Pagination.props";
import { FaPager } from "react-icons/fa";


const Pagination: React.FC<PaginationProps> = ({pagination, handleChange}) => {

    return (
        <div className="form-group col-md-6">
             <MemoizedInput symbol={<FaPager />} value={pagination} type='number' placeholder='Pagination: ' onChange={handleChange} />
        </div>
    );
}

export default Pagination;