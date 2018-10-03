import React, { Component } from 'react'
import { shape, func } from 'prop-types';

import QuizQuestionButton from './QuizQuestionButton'

/**
 * 
 * @class QuizQuestion
 * @extends Component
 */
class QuizQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = { incorrectAnswer: null };
  }

  /**
   * 
   * @method handleClick
   * 
   * @memberof QuizEnd
   * 
   * @returns { void }
   */
  handleClick = (button_text) => {
    if (button_text === this.props.quiz_question.answer) {
      this.setState({ incorrectAnswer: false });
      this.props.showNextQuestionHandler()
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }

  /**
   *
   * @description renders JSX element
   *
   * @method
   *
   * @memberof QuizQuestion
   *
   * @returns { JSX }
   *
   */
  render() {
    const { quiz_question } = this.props;
    const { incorrectAnswer } = this.state;
    return (
      <>
      <div className="question">
        {quiz_question.instruction_text}
      </div>
      <div className="answers-container">
        {quiz_question.answer_options.map((answer, index) => (
          <QuizQuestionButton 
            button_text={answer} 
            key={index} 
            clickHandler={this.handleClick} 
          />
        ))}
      </div>
        {incorrectAnswer ?
          <p className='error'>Sorry, that's not right</p> : 
          null
        }
      </>                
    )
  }
}

QuizQuestion.propTypes = {
  quiz_question: shape({}),
  showNextQuestionHandler: func
};

export default QuizQuestion;
