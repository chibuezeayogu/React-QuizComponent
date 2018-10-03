import React, { Component } from 'react'

import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'

/**
 * 
 * @class Quiz
 * @extends Component
 */
class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }

  /**
   * 
   * @method showNextQuestion
   * 
   * @memberof Quiz
   * 
   * @returns { void }
   */
  showNextQuestion = () => {
    this.setState((state) => ({
      quiz_position: state.quiz_position + 1
    }))
  }

  /**
   * 
   * @method handleResetClick
   * 
   * @memberof Quiz
   * 
   * @returns { void }
   */
  handleResetClick = () => {
    this.setState({ quiz_position: 1 })
  }

  /**
   *
   * @description renders JSX element
   *
   * @method
   *
   * @memberof Quiz
   *
   * @returns { JSX }
   *
   */
  render() {
    const { quiz_position } = this.state;
    const { quizData} = this.props;

    const isQuizEnd = (quiz_position - 1) === quizData.quiz_questions.length;
    return (
      <div className="container">
        {isQuizEnd ?
          <QuizEnd resetClickHandler={this.handleResetClick} /> :
          <QuizQuestion
            quiz_question={quizData.quiz_questions[quiz_position - 1]}
            showNextQuestionHandler={this.showNextQuestion}
          />
        }
      </div>
    )
  }
}

export default Quiz;
