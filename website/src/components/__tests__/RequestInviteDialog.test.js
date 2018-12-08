/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { RequestInviteDialog } from '../RequestInviteDialog';
import { DIALOG_STATE } from '../../reducers/RequestInvite';

const setup = overrideProps => {
  const initProps = {
    dialogStatus: DIALOG_STATE.initial,
    dialogMessage: '',
    onClose: jest.fn(),
    resetRequestInviteDialog: jest.fn(),
    requestInvite: jest.fn()
  };
  const props = { ...initProps, ...overrideProps};
  const wrapper = shallow(
    <RequestInviteDialog {...props}/>
  );
  return { wrapper, props };
}

describe('RequestInviteDialog snapshots', () => {

  it('should match snapshot in inital status', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot in loading status', () => {
    const { wrapper } = setup({dialogStatus: DIALOG_STATE.loading});
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot in success status', () => {
    const { wrapper } = setup({dialogStatus: DIALOG_STATE.success});
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot in error status with dialogMessage', () => {
    const { wrapper } = setup({dialogStatus: DIALOG_STATE.error, dialogMessage: "EXAMPLE ERROR MESSAGE"});
    expect(wrapper).toMatchSnapshot();
  });


});

describe('RequestInviteDialog functions', () => {

    it('should be able to close modal if modal is not in loading status', () => {
      const { wrapper, props } = setup();
      wrapper.simulate('click');
      expect(props.onClose).toBeCalled();

      wrapper.setProps({dialogStatus: DIALOG_STATE.success});
      wrapper.simulate('click');
      expect(props.onClose).toBeCalledTimes(2);
    
      wrapper.setProps({dialogStatus: DIALOG_STATE.error});
      wrapper.simulate('click');
      expect(props.onClose).toBeCalledTimes(3);
    });

    it('should not be able to close modal if the modal is in loading status', () => {
      const mockClose = jest.fn();
      const { wrapper }= setup({dialogStatus: DIALOG_STATE.loading, onClose: mockClose});
      wrapper.simulate('click');
      expect(mockClose).not.toBeCalled();
    });

    it('should have a disabled send button as default, and an active button when all inputs are valid', () => {
      const { wrapper } = setup();
      const sendBtn =  wrapper.findWhere(n => n.props().children === 'Send');
      expect(sendBtn.props().isDisabled).toBeTruthy();
      wrapper.setState({fullName: "EXAMPLE NAME", email: "test@ttt.com", confirmedEmail: "test@ttt.com"});
      wrapper.update();
      const sendBtnUpdated = wrapper.findWhere(n => n.props().children === 'Send');
      expect(sendBtnUpdated.props().isDisabled).toBeFalsy();
      expect(wrapper).toMatchSnapshot();
    });

    it('should send action to redux when onSend is triggered', () => {
      const { wrapper, props } = setup();
      wrapper.setState({fullName: "TEST ACTIOn", email: "test@action.com", confirmedEmail: "test@action.com"});
      wrapper.findWhere(n => n.props().children === 'Send').simulate('click');
      expect(props.requestInvite).toHaveBeenCalledWith("TEST ACTIOn", "test@action.com");
    });

    it('should call reset dialog action when component is unmounted', () => {
      const { wrapper, props } = setup();
      wrapper.instance().componentWillUnmount();
      expect(props.resetRequestInviteDialog).toBeCalled();
    });

});

describe('RequestInviteDialog input onChange validates', () => {
  
  it('should set correct error when onNameChanged is called', () => {
    const { wrapper } = setup();
    const instance = wrapper.instance()
    instance.onNameChanged({target: {value: 'ab'}});
    expect(wrapper.state()).toMatchSnapshot("Error state for short name");
    instance.onNameChanged({target: {value: ''}});
    expect(wrapper.state()).toMatchSnapshot("Error state for empty name");
    instance.onNameChanged({target: {value: 'Good Name'}});
    expect(wrapper.state()).toMatchSnapshot("Error state for valid name");
  });
  
  it('should set correct error when onEmailChanged is called', () => {
    const { wrapper } = setup();
    const instance = wrapper.instance()
    instance.onEmailChanged({target: {value: ''}});
    expect(wrapper.state()).toMatchSnapshot("Error state for empty email");
    instance.onEmailChanged({target: {value: 'invalid'}});
    expect(wrapper.state()).toMatchSnapshot("Error state for invalid email");
    instance.onEmailChanged({target: {value: 'test@valid.com'}});
    expect(wrapper.state()).toMatchSnapshot("Error state for valid email");
  });
  
  it('should set correct error when onConfirmedEmailChanged is called', () => {
    const { wrapper } = setup();
    const instance = wrapper.instance()
    wrapper.setState({
      email: "miles@ttt.com"
    })
    instance.onConfirmedEmailChanged({target: {value: ''}});
    expect(wrapper.state()).toMatchSnapshot("Error state for empty confirmed email");
    instance.onConfirmedEmailChanged({target: {value: 'invalidCOnfimed'}});
    expect(wrapper.state()).toMatchSnapshot("Error state for invalid email");
    instance.onConfirmedEmailChanged({target: {value: 'test@valid.com'}});
    expect(wrapper.state()).toMatchSnapshot("Error state for not matched confirmed email");
    instance.onConfirmedEmailChanged({target: {value: 'miles@ttt.com'}});
    expect(wrapper.state()).toMatchSnapshot("Error state for matched confirmed email");
  });
  
});
