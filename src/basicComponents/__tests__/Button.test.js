/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { Button } from '../index';

const setup = overrideProps => {
  const initProps = {
    isDisabled: false,
    onClick: jest.fn()
  };
  const props = { ...initProps, ...overrideProps};
  const wrapper = shallow(
    <Button {...props}/>
  );
  return { wrapper, props };
}

describe('Button snapshots', () => {

  it('should match snapshot when button is not disabled', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should match snapshot when button is disabled', () => {
    const { wrapper } = setup({isDisabled: true});
    expect(wrapper).toMatchSnapshot();
  });

});

describe('Button functions', () => {

  it('should call onClick function when the button is not disabled.', () => {
    const mockFn = jest.fn();
    const { wrapper } = setup({onClick: mockFn});
    wrapper.find('button').simulate('click');
    expect(mockFn).toBeCalled();
  });  

  it('should call onClick function when the button is not disabled.', () => {
    const mockFn = jest.fn();
    const { wrapper } = setup({onClick: mockFn});
    wrapper.find('button').simulate('click');
    expect(mockFn).toBeCalled();
  });
  
});