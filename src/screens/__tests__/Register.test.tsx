import {it} from '@jest/globals';

import Register from '../register';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Register />);
});
