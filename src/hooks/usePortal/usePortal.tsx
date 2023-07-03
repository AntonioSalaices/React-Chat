import { ReactNode, ReactPortal, useCallback, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

/**
 * A react hook to easily implement portals
 * @param {element} HTMLElement
 * @example Inside a functional component:
 * const portal = usePortal(element);
 */
function usePortal(element: HTMLElement) {
  const [portal, setPortal] = useState<any>({
    render: () => null,
    remove: () => null,
  });

  const createPortal = useCallback((elem: HTMLElement) => {
    if (!element) return null;

    const Portal: React.FC<ReactPortal> = ({ children }: { children: ReactNode }) =>
      ReactDOM?.createPortal(children, elem);

    const remove = (elem: HTMLElement) => ReactDOM?.unmountComponentAtNode(elem);

    return { render: Portal, remove };
  }, []);

  useEffect(() => {
    if (element) portal.remove();

    const newPortal = createPortal(element);
    setPortal(newPortal as any);

    return () => newPortal?.remove(element);
  }, [element]);

  return portal?.render;
}

export default usePortal;
