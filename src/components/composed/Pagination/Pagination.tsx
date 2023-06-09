import InputField from "@Components/basics/InputField/InputField";
import { PaginationProps } from "./Pagination.props";
import { FaPager } from "react-icons/fa";

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  handleChange,
}) => {
  return (
    <InputField
      symbol={<FaPager />}
      value={pagination}
      type="number"
      placeholder="Pagination: "
      onChange={handleChange}
    />
  );
};

export default Pagination;
