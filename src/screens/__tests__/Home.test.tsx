import {it} from '@jest/globals';

import Home from '../Home';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Home />);
});
