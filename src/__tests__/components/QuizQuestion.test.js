import React from 'react';
import { shallow } from 'enzyme';

import QuizQuestion from '../../QuizQuestion';
import quizData from '../../quizData.json';

describe('QuizQuestion Component', () => {
  const setup = () => {
    const props = {
      showNextQuestionHandler: jest.fn(),
      quizQuestion: {
        answerOptions: []
      }
    }

    return shallow(<QuizQuestion {...props} />);
  };

  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleResetClick method with right answer', () => {
    const handleSpy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper.instance().handleClick();
    expect(handleSpy).toHaveBeenCalled();
  });

  it('should call handleClick method with wrong answer', () => {
    const handleSpy = jest.spyOn(wrapper.instance(), 'handleClick');
    wrapper.instance().handleClick("0");
    expect(handleSpy).toHaveBeenCalled();
  });
});
