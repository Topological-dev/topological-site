import React from "react"

const FAQs = ({ questions }) => {
  return (
    <div className="question-container">
      {questions.map( (question, index) =>
        <div key={index} className="question">
          <h5>{question.question.question}</h5>
          <p>&emsp;{question.answer.answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQs
