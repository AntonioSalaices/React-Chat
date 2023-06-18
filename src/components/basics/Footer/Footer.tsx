import { translate } from "../../../i18n";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-light-7 pt-3 pb-3 mt-5">
      <div className="container">{translate("footer.message")}</div>
    </footer>
  );
};
export default Footer;
