import { ContainerProps } from '../Container/Container.props';

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div id="main-container" className="container">
      {children}
    </div>
  );
};
export { Container };
