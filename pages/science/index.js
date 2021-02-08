import axios from 'axios';
import {useState} from 'react';
export const getStaticProps = async (context) => {
  let question = await axios.get('http://localhost:3000/api/questions')
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    props: {
      question
    }
  }
}

const Science = (props) => {
  const {question, answer} = {...props.question};

  return (
    <main className="science">
      <div className="quiz">
        <div className="quiz--header">
          <h1 className="quiz--header_text">Science</h1>
        </div>
        
        <div className="quiz--body">
          <p className="quiz--body_question">{question}</p>
          <button className="quiz--body_button">{answer}</button>
        </div>
      </div>
    </main>
  )
}

export default Science;