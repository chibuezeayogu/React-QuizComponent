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
    const { buttonText } = this.props;
    this.props.clickHandler(buttonText);
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
    const { buttonText } = this.props;

    return (
      <button className="button"
        onClick={this.handleClick}
      >
        {buttonText}
      </button>
    )
  }
}

QuizQuestionButton.propTypes = {
  button_text: string,
  clickHandler: func
};

export default QuizQuestionButton;
