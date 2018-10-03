import React, { Component } from 'react'
import { string, func } from 'prop-types';

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
    const { button_text } = this.props;

    return (
      <button className="button"
        onClick={this.handleClick}
      >
        {button_text}
      </button>
    )
  }
}

QuizQuestionButton.propTypes = {
  button_text: string,
  clickHandler: func
};

export default QuizQuestionButton;
