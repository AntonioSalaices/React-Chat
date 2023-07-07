import { RenderResult, render } from '@testing-library/react';
import { Modal } from './Modal';

describe('<Modal />', () => {
  const onClose = jest.fn();
  let component: RenderResult;
  beforeEach(() => {
    component = render(
      <Modal onClose={onClose}>
        <span>Hola</span>
      </Modal>
    );
  });
  it('Should render modal', () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });
});
