/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { Button } from '../index';

const mockOnClick = jest.fn();

const setup = overrideProps => {
  const initProps = {
    isDisabled: false,
    onClick: mockOnClick
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
    const { wrapper } = setup();
  });
  
});