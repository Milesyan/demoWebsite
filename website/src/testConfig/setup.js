import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';

if (typeof window !== 'undefined') {
  require('whatwg-fetch');
}
configure({ adapter: new Adapter() })


global.shallow = shallow;
global.React = React;
const mockAsyncFunc = data => {
  return () => {
    return new Promise((r) => (r(data)));
  };
};
global.mockAsyncFunc = mockAsyncFunc;
