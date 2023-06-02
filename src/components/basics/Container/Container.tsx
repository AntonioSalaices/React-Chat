import {ContainerProps} from '../Container/Container.props';

const Container: React.FC<ContainerProps> = ({children}) => {

  return (
    <div className="card-deck">
      {children}
    </div>
  )
}
export default Container;