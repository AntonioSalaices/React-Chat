import InputField from "@Components/basics/InputField/InputField";
import { PaginationProps } from "./Pagination.props";
import { FaPager } from "react-icons/fa";
import { translate } from "@Translate/translate";

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  handleChange,
  txOptions,
  text,
  tx,
}) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;

  return (
    <div className="col-12-xs col-12-sm col-6-md col-3-xl">
      <InputField
        symbol={<FaPager />}
        value={pagination}
        type="number"
        placeholder={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
