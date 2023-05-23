import {ContainerProps} from '../Container/Container.props';
import '../../../styles/Container.css';

const Container: React.FC<ContainerProps> = ({children}) => {

  return (
    <div className='container'>
        {children}
    </div>
  )
}
export default Container;