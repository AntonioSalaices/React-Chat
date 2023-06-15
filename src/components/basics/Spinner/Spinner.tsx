import MDSpinner from "react-md-spinner";
import { SpinnerProps } from "./Spinner.props";
import Container from "../Container";

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <Container>
      <MDSpinner {...props} />
    </Container>
  );
};

export default Spinner;
