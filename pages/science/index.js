import axios from 'axios';
import {useState, useEffect} from 'react';
import {useGetScore, useSetScore} from '../../scripts/context';

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
  const setScore = useSetScore();
  const score = useGetScore();

  const [nextQuestion, setNextQuestion] = useState('');
  const [nextAnswer, setNextAnswer] = useState('');
  const [nextRandom, setNextRandom] = useState('');
  const [counter, setCounter] = useState(1);

  const checkAnswer = (choice) =>  {
    // console.log('Correct', choice);
    if(choice === nextAnswer) {
      console.log('Correct');
      setScore(10);
      setCounter(counter + 1);
    }else{
      console.log('Wrong');
      setCounter(counter + 1);
    }
  }

  useEffect(async () => {
    let quiz = await axios.get('http://localhost:3000/api/questions')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error)
    });

    setNextQuestion(quiz.question);
    setNextAnswer(quiz.answer);
    setNextRandom(quiz.random);
  }, [counter, score])

  return (
    <main className="science">
      <div className="quiz">
        <div className="quiz--header">
          <h1 className="quiz--header_text">Science</h1>
          <h2 className="quiz--header_score">Score: {score.score}</h2>
        </div>
        
        <div className="quiz--body">
          <div className="quiz--body_progress">
            <div className="quiz--body_progress-step" aria-current={counter === 1}>1</div>
            <div className="quiz--body_progress-step" aria-current={counter === 2}>2</div>
            <div className="quiz--body_progress-step" aria-current={counter === 3}>3</div>
            <div className="quiz--body_progress-step" aria-current={counter === 4}>4</div>
            <div className="quiz--body_progress-step" aria-current={counter === 5}>5</div>
          </div>

          <p className="quiz--body_question">{nextQuestion}</p>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);
            }}>{nextAnswer}</button>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);
            }}>{nextRandom[0]}</button>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);
            }}>{nextRandom[1]}</button>
          <button className="quiz--body_button" onClick={(evt) => {
              checkAnswer(evt.target.innerText);              
            }}>{nextRandom[2]}</button>
        </div>
      </div>
    </main>
  )
}

export default Science;