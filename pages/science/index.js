import axios from 'axios';
import {useEffect} from 'react';
import {useGetData, useSetData} from '../../scripts/context';

export const getStaticProps = async (context) => {
  let question = await axios.get('http://localhost:3000/api/questions')
  .then((response) => {
    return response.data;
  })
  .catch((error) => {
    console.log(error);
  });

  return {
    props: {
      question
    }
  }
}

const Science = (props) => {
  const {question, answer, random} = {...props.question};
  const setData = useSetData();
  const data = useGetData();

  const checkAnswer = (choice) =>  {
    if(choice === answer) {
      console.log('Correct');
    }else{
      console.log('Wrong');
    }
  }

  useEffect(async () => {
    
  }, [data])

  return (
    <main className="science">
      <div className="quiz">
        <div className="quiz--header">
          <h1 className="quiz--header_text">Science</h1>
          <h2 className="quiz--header_score">Score: 0</h2>
        </div>
        
        <div className="quiz--body">
          <div className="quiz--body_progress">
            <div className="quiz--body_progress-step" aria-current="true">1</div>
            <div className="quiz--body_progress-step">2</div>
            <div className="quiz--body_progress-step">3</div>
            <div className="quiz--body_progress-step">4</div>
            <div className="quiz--body_progress-step">5</div>
          </div>

          <p className="quiz--body_question">{question}</p>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);
            }}>{answer}</button>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);
            }}>{random[0]}</button>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);
            }}>{random[1]}</button>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);              
            }}>{random[2]}</button>
        </div>
      </div>
    </main>
  )
}

export default Science;