import React, { Component } from 'react'
import { func } from 'prop-types';

/**
 * 
 * @class QuizEnd
 * @extends Component
 */
class QuizEnd extends Component {
  /**
   * 
   * @method handleResetClick
   * 
   * @memberof QuizEnd
   * 
   * @returns { void }
   */
  handleResetClick = () => {
    this.props.resetClickHandler()
  }

  /**
   *
   * @description renders JSX element
   *
   * @method
   *
   * @memberof QuizEnd
   *
   * @returns { JSX }
   *
   */
  render() {
    return (
      <div className="quiz-end">
        <p>Thanks for playing!</p>
        <button className="reset-button"
          onClick={this.handleResetClick}
        >
          Reset Quiz
        </button>
      </div>                
    )
  }
}

QuizEnd.propTypes = {
  resetClickHandler: func.isRequired
};

export default QuizEnd;
