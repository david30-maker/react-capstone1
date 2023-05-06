import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import DetailPage from '../Components/Details/DetailsContainer';
import store from '../Redux/store';

it('Test DetailPage renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DetailPage />
      </Provider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
