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

describe('Button Snapshot', () => {

  it('should match snapshot when button is not disabled', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
  
});