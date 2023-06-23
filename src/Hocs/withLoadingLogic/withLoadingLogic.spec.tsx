import { render } from '@testing-library/react';
import MemoizedList from '@Components/composed/List/List';
import withLoadingLogic from './withLoadingLogic';

describe('withLoadingLogic:: Spec', () => {
  test('should render no found message', () => {
    const ConditionalComponent = withLoadingLogic(MemoizedList);

    const component = render(<ConditionalComponent isLoading={false} data={[]} isShownNoFoundMessage={true} />);
    const { getByTestId } = component;
    const noFoundMessage = getByTestId('messageTestId');
    expect(noFoundMessage).toBeVisible();
  });
});