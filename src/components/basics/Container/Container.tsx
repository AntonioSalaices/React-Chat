import { ContainerProps } from "../Container/Container.props";

const Container: React.FC<ContainerProps> = ({ children, isStale }) => {
  return (
    <div
      style={{
        opacity: isStale ? 0.5 : 1,
        transition: isStale
          ? "opacity 0.2s 0.2s linear"
          : "opacity 0s 0s linear",
      }}
      className="card-grid"
    >
      {children}
    </div>
  );
};
export default Container;
