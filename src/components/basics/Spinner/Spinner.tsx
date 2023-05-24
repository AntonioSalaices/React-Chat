import MDSpinner from 'react-md-spinner';
import {SpinnerProps} from './Spinner.props';
import '../../../styles/Spinner.css';

const Spinner: React.FC<SpinnerProps> = (props) => {
  return (
    <div className='spinner-container'>
      <MDSpinner {...props} />
    </div>
  );
}

export default Spinner;