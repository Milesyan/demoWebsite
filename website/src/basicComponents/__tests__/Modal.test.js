/* eslint-disable no-undef */ /*eslint-disable react/react-in-jsx-scope*/

import { Modal } from '../index';

const setup = overrideProps => {
  const initProps = {
    onClick: jest.fn()
  };
  const props = { ...initProps, ...overrideProps};
  const wrapper = shallow(
    <Modal {...props}>
      <div>
        TEST CHILDREN CONTENT
      </div>
    </Modal>
  );
  return { wrapper, props };
}

describe('Modal snapshots', () => {

  it('should match snapshot when Modal is not disabled', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

});

describe('Modal functions', () => {

  it('should call the onClick function on the outside mask', () => {
    const { wrapper, props } = setup();
    wrapper.simulate('click')
    expect(props.onClick).toBeCalled();
  });
  
});