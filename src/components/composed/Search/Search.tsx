import Input from "@Components/basics/Input";
import { SearchProps } from "./Search.props";
import { FaSearch } from "react-icons/fa";
import { translate } from "@Translate/translate";

const Search: React.FC<SearchProps> = ({
  search,
  handleChange,
  txOptions,
  text,
  tx,
}) => {
  const i18Text = tx && translate(tx, txOptions);
  const content = i18Text || text;

  return (
    <div className="col-12-xs col-12-sm col-6-md col-3-xl">
      <Input
        symbol={<FaSearch />}
        value={search}
        type="text"
        placeholder={content}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
