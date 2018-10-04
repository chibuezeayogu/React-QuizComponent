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
    this.state = { quizPosition: 1 }
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
      quizPosition: state.quizPosition + 1
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
    this.setState({ quizPosition: 1 })
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
    const { quizPosition } = this.state;
    const { quizData } = this.props;
    const isQuizEnd = (quizPosition - 1) === quizData.quizQuestions.length;

    return (
      <div className="container">
        {isQuizEnd ?
          <QuizEnd resetClickHandler={this.handleResetClick} /> :
          <QuizQuestion
            quizQuestion={quizData.quizQuestions[quizPosition - 1]}
            showNextQuestionHandler={this.showNextQuestion}
          />
        }
      </div>
    )
  }
}

export default Quiz;
