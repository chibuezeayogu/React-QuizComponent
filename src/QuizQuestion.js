import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
    handleClick(button_text) {
    }
    render() {
        return (
            <main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>{this.props.quiz_question.answer_options.map((answer, index) => {
                return <QuizQuestionButton button_text={answer} key={index} clickHandler={this.handleClick.bind(this)} />
              })}
              </ul>
            </section>
          </main>                
        )
    }
}

export default QuizQuestion