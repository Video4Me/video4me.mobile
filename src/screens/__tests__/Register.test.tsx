import {it} from '@jest/globals';

import Register from '../Register';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Register />);
});
