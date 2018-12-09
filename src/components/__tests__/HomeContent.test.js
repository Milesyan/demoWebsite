/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { HomeContent } from '../HomeContent';

const setup = overrideProps => {
  const initProps = {
    showDialog: false,
    showRequestInviteDialog: jest.fn(),
    dismissRequestInviteDialog: jest.fn()
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
    const { wrapper } = setup({showDialog: true});
    expect(wrapper).toMatchSnapshot();
  });

});

describe('HomeContent functions', () => {

  it('should dispatch showRequestInviteDialog action when request an invite Button is clicked', () => {
    const { wrapper, props } = setup();
    wrapper.find('Button').simulate('click');
    expect(props.showRequestInviteDialog).toBeCalled()
  });

  it('should dispatch dismissRequestInviteDialog action when showDialog was true and dialog onClose is triggered', () => {
    const { wrapper, props } = setup({showDialog: true});
    wrapper.find('Connect(RequestInviteDialog)').simulate('close');
    expect(props.dismissRequestInviteDialog).toBeCalled();
  });
  
});