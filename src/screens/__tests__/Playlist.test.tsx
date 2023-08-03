import {it} from '@jest/globals';

import Playlist from '../Playlist';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Playlist />);
});
