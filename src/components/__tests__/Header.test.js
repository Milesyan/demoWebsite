/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { Header } from '../index';

const setup = overrideProps => {
  const initProps = {
  };
  const props = { ...initProps, ...overrideProps};
  const wrapper = shallow(
    <Header {...props}/>
  );
  return { wrapper, props };
}

describe('Header snapshots', () => {

  it('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

});