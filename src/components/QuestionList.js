
// import React, { useEffect, useState} from "react"
// import QuestionItem from "./QuestionItem";

// function QuestionList() {
//   const [questions, setQuestion] = useState([])

//   useEffect (() => {
//     fetch ("http://localhost:4000/questions")
//     .then((resp) => resp.json())
//     .then((data) => {
//       setQuestion(data)
//     })
//   })

//       function handleDeleteClick() {
//       fetch (`http://localhost:4000/questions/${question.id}`, {
//         method: "DELETE"
//       })
//       .then ((resp) => resp.Json)
//       .then(() => onDeleteQuestion(question))
//     }
//   return (
//     <section>
//       <h1>Quiz Questions</h1>
//       <ul>
//         {questions.map((question) => {
//           return <QuestionItem 
//             key={question.id} 
//             question={question} />
//         })}</ul>
//     </section>
//   );
// }

// export default QuestionList;
// QuestionList.js
// QuestionList.js
import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []); 

  function handleDeleteQuestion(questionToDelete) {
    fetch(`http://localhost:4000/questions/${questionToDelete.id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => {
        const updatedQuestions = questions.filter((question) => question.id !== questionToDelete.id);
        setQuestions(updatedQuestions);
      })
      .catch((error) => console.error("Error:", error));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onDeleteQuestion={() => handleDeleteQuestion(question)}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
