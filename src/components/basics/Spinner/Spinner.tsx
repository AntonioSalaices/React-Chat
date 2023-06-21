import MDSpinner from "react-md-spinner";
import { SpinnerProps } from "./Spinner.props";

const Spinner: React.FC<SpinnerProps> = (props) => {
  return <MDSpinner {...(props as SpinnerProps)} />;
};

export default Spinner;
