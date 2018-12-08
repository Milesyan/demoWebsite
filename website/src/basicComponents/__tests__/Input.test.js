/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { Input } from '../index';

const setup = overrideProps => {
  const initProps = {
    onEmitUpdates: jest.fn(),
    errMsg: null,
    placeholder: "Place Holder",
  };
  const props = { ...initProps, ...overrideProps};
  const wrapper = shallow(
    <Input {...props}/>
  );
  return { wrapper, props };
}

describe('Input snapshots', () => {

  it('should match snapshot with placeholder', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match snapshot with error message', () => {
    const { wrapper } = setup({errMsg: 'Example Error'});
    expect(wrapper).toMatchSnapshot();
  });

});

describe('Input functions', () => {

  it('should not emit text updates for initial state', () => {
    const { wrapper, props } = setup();
    wrapper.find('input').simulate('change', "EXAMPLE CHANGE 1");
    expect(props.onEmitUpdates).not.toBeCalled();
  });  

  it('should not emit text updates if set shouldEmitUpdates to be true', () => {
    const { wrapper, props } = setup({shouldEmitUpdates: true});
    wrapper.find('input').simulate('change', "EXAMPLE CHANGE 2");
    expect(props.onEmitUpdates).toHaveBeenLastCalledWith("EXAMPLE CHANGE 2");
  });  

  it('should not emit text updates if the input component onBlur has been called', () => {
    const { wrapper, props } = setup({shouldEmitUpdates: false});
    wrapper.find('input').simulate('blur', "EXAMPLE BLUR 3");
    expect(props.onEmitUpdates).toHaveBeenLastCalledWith("EXAMPLE BLUR 3");
    wrapper.find('input').simulate('change', "EXAMPLE CHANGE 4");
    expect(props.onEmitUpdates).toHaveBeenLastCalledWith("EXAMPLE CHANGE 4");
  });  
  
});