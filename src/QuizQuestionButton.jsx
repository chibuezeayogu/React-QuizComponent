import React, { Component } from 'react'

/**
 * 
 * @class QuizQuestionButton
 * @extends Component
 */
class QuizQuestionButton extends Component {
  /**
   * 
   * @method handleClick
   * 
   * @memberof QuizQuestionButton
   * 
   * @returns { void }
   */
  handleClick = () => {
    const { button_text } = this.props;
    this.props.clickHandler(button_text);
  }

  /**
   *
   * @description renders JSX element
   *
   * @method
   *
   * @memberof QuizQuestionButton
   *
   * @returns { JSX }
   *
   */
  render() {
    return (
      <li>
        <button 
          onClick={this.handleClick}
        >
        {this.props.button_text}
        </button>
      </li>
    )
  }
}

export default QuizQuestionButton;
