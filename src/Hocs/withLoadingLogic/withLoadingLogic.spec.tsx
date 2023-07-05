import { render } from '@testing-library/react';
import { List } from '@Components/Core';
import withLoadingLogic from './withLoadingLogic';

describe('withLoadingLogic:: Spec', () => {
  test('should render no found message', () => {
    const ConditionalComponent = withLoadingLogic(List);

    const component = render(<ConditionalComponent isLoading={false} data={[]} isShownNoFoundMessage={true} />);
    const { getByTestId } = component;
    const noFoundMessage = getByTestId('messageTestId');
    expect(noFoundMessage).toBeVisible();
  });
});
