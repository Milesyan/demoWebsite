/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import Home from '../Home';

describe('Home Snapshot', () => {

  it('should match snapshot', () => {

    expect(shallow(<Home/>)).toMatchSnapshot();
    
  });
  
});