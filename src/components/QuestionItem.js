import React from "react";

function QuestionItem({ question, onDeleteQuestion }) {
  if (!question) {
   
    return <p>Loading question...</p>;
  }

  const { id, prompt, answers, correctIndex } = question;

 
  const options =
    Array.isArray(answers) &&
    answers.map((answer, index) => (
      <option key={index} value={index}>
        {answer}
      </option>
    ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={onDeleteQuestion}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
