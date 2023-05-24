import MDSpinner from 'react-md-spinner';
import {SpinnerProps} from './Spinner.props';

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div>
      <MDSpinner {...props} />
    </div>
  );
}

export default Spinner;