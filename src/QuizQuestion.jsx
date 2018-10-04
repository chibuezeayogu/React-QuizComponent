import React, { Component } from 'react'
import { shape, func, string, number, array } from 'prop-types';

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
  handleClick = (buttonText) => {
    if (buttonText === this.props.quizQuestion.answer) {
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
    const { quizQuestion } = this.props;
    const { incorrectAnswer } = this.state;

    return (
      <>
      <div className="question">
        {quizQuestion.instructionText}
      </div>
      <div className="answers-container">
        {quizQuestion.answerOptions.map((answer, index) => (
          <QuizQuestionButton 
            buttonText={answer} 
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
  quizQuestion: shape({
    id: number,
    instructionText: string,
    answerOptions: array,
    answer: string
  }).isRequired,
  showNextQuestionHandler: func.isRequired
};

export default QuizQuestion;
