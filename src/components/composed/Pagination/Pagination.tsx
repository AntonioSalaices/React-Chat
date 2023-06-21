import Input from "@Components/basics/Input";
import { PaginationProps } from "./Pagination.props";
import { FaPager } from "react-icons/fa";
import { translate } from "@Translate/translate";

const Pagination: React.FC<PaginationProps> = ({
  pagination,
  handleChange,
  txOptions,
  text,
  tx,
  subTx,
  subText,
}) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;
  const i18SubText = subTx && translate(subTx, txOptions);
  const subContent = i18SubText || subText;

  return (
    <div className="col-12-xs col-12-sm col-3-md col-3-xl">
      <Input
        icon={<FaPager />}
        value={pagination}
        type="number"
        placeholder={content}
        subText={subContent}
        onChange={handleChange}
      />
    </div>
  );
};

export default Pagination;
