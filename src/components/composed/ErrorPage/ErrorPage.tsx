import { ErrorPageProps } from "./ErrorPage.props";
import { translate } from "@Translate/translate";

const ErrorPage: React.FC<ErrorPageProps> = ({
    error
}) => {

    return (
        <div className="container">
            <h1>{translate('error.messageTitle')}</h1>
            <span>{error ? error.message : translate('error.genericMessage')}</span>
        </div>
    );
}

export default ErrorPage;