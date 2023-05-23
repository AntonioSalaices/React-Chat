import {ContainerProps} from '../Container/Container.props';
import '../../../styles/Container.css';

const Container: React.FC<ContainerProps> = ({children}) => {

  return (
    <div className='container'>
        <div className='grid-row'>
            {children}
        </div>
    </div>
  )
}
export default Container;