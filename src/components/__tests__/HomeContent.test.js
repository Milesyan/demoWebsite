/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { HomeContent } from '../index';

const setup = overrideProps => {
  const initProps = {
  };
  const props = { ...initProps, ...overrideProps};
  const wrapper = shallow(
    <HomeContent {...props}/>
  );
  return { wrapper, props };
}

describe('HomeContent snapshots', () => {

  it('should match snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when there is a dialog', () => {
    const { wrapper } = setup();
    wrapper.setState({
      showDialog: true
    });
    expect(wrapper).toMatchSnapshot();
  });

});

describe('HomeContent functions', () => {

  it('should set showDialog to true when request an invite Button is clicked', () => {
    const { wrapper } = setup();
    wrapper.find('Button').simulate('click');
    expect(wrapper.state().showDialog).toBe(true);
  });

  it('should set showDialog to false when showDialog was true and dialog onClose is triggered', () => {
    const { wrapper } = setup();
    wrapper.setState({showDialog: true});
    expect(wrapper.state().showDialog).toBe(true);
    wrapper.find('Connect(RequestInviteDialog)').simulate('close');
    expect(wrapper.state().showDialog).toBe(false);
  });
  
});