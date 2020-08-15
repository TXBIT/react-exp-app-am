import React from 'react';
import ReactShallowRenderers from 'react-test-renderer/shallow';

import Header from '../../components/Header';

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderers();
  renderer.render(<Header />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
