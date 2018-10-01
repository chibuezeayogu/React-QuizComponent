import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizEnd from './QuizEnd'
import quizData from './quiz_data.json';
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

  render() {
    const {
      state: { quiz_position },
      handleResetClick,
      showNextQuestion
    } = this;
    const isQuizEnd = (quiz_position - 1) === quizData.quiz_questions.length;
    return (
      <div>
        {isQuizEnd ?
          <QuizEnd resetClickHandler={handleResetClick} /> :
          <QuizQuestion
            quiz_question={quizData.quiz_questions[quiz_position - 1]}
            showNextQuestionHandler={showNextQuestion}
          />
        }
      </div>
    )
  }
}

export default Quiz;
