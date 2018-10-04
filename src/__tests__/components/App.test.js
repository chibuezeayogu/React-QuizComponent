import React from 'react';
import { shallow } from 'enzyme';

import App from '../../App';

describe('QuizEnd Component', () => {
  const wrapper = shallow(<App />);

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
});