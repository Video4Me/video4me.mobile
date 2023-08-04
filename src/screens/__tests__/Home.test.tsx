import {it} from '@jest/globals';

import Home from '../home';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Home />);
});
