import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import HomePage from '../Components/Home/HomeContainer';
import store from '../Redux/store';

it('Test HomePage renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
