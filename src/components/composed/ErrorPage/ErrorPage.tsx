import Container from "@Components/basics/Container/Container";
import { ErrorPageProps } from "./ErrorPage.props";
import { translate } from "@Translate/translate";

const ErrorPage: React.FC<ErrorPageProps> = ({
    error
}) => {

    return (
        <Container>
            <h1>{translate('error.messageTitle')}</h1>
            <span>{error ? error.message : translate('error.genericMessage')}</span>
        </Container>
    );
}

export default ErrorPage;