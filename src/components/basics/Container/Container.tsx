import {ContainerProps} from '../Container/Container.props';

const Container: React.FC<ContainerProps> = ({children}) => {

  return (
    <div className='container'>
        <div className='container-row'>
            {children}
        </div>
    </div>
  )
}
export default Container;