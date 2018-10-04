import React from 'react';
import { shallow } from 'enzyme';

import QuizQuestionButton from '../../QuizQuestionButton';
import quizData from '../../quizData.json';

describe('QuizEnd Component', () => {
  const setup = () => {
    const props = {
      clickHandler: jest.fn(),
      buttonText: "first button"
    }

    return shallow(<QuizQuestionButton {...props} />);
  };

  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleClick method', () => {
    const handleSpy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper.instance().handleClick();
    expect(handleSpy).toHaveBeenCalled();
  });
});
