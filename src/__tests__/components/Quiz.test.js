import React from 'react';
import { shallow } from 'enzyme';

import Quiz from '../../Quiz';
import quizData from '../../quizData.json';

describe('Quiz Component', () => {
  const setup = () => {
    const props = {
      quizData
    }

    return shallow(<Quiz {...props} />);
  };

  const wrapper = setup();

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call showNextQuestion method', () => {
    const handleSpy = jest.spyOn(wrapper.instance(), 'showNextQuestion');
    wrapper.instance().showNextQuestion();
    expect(handleSpy).toHaveBeenCalled();
  });

  it('should call handleResetClick method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleResetClick');
    wrapper.instance().handleResetClick();
    expect(spy).toHaveBeenCalled();
  });
});
