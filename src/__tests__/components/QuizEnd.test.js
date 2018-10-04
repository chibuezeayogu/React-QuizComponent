import React from 'react';
import { shallow } from 'enzyme';

import QuizEnd from '../../QuizEnd';
import quizData from '../../quizData.json';

describe('QuizEnd Component', () => {
  const setup = () => {
    const props = {
      resetClickHandler: jest.fn()
    }

    return shallow(<QuizEnd {...props} />);
  };

  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleResetClick method', () => {
    const handleResetSpy = jest.spyOn(wrapper.instance(), 'handleResetClick');
    wrapper.instance().handleResetClick();
    expect(handleResetSpy).toHaveBeenCalled();
  });
});
