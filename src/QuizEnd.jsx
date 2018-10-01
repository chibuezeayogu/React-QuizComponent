import React, { Component } from 'react'

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
      <div>
        <p>Thanks for playing!</p>
        <a onClick={this.handleResetClick} href=''>Reset Quiz</a>
      </div>                
    )
  }
}

export default QuizEnd;
