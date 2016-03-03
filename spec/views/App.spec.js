import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import App from '../../app/views/App.jsx'

describe('When user is signed out', () => {
  it('shows a link to "/sign_in"', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const output = renderer.getRenderOutput();
    expect(output).toIncludeJSX('<a href="/signin">');
  });
});
