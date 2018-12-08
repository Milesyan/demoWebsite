/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { Footer } from '../index';

const setup = overrideProps => {
  const initProps = {
  };
  const props = { ...initProps, ...overrideProps};
  const wrapper = shallow(
    <Footer {...props}/>
  );
  return { wrapper, props };
}

describe('Footer snapshots', () => {

  it('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

});