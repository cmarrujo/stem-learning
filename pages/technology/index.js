import React, {useState, useEffect} from 'react';
import {useGetScore, useSetScore} from '../../scripts/context';
import axios from 'axios';
import Progress from '../../components/Progress/Progress';
import Quiz from '../../components/Quiz/Quiz';
import Score from '../../components/Score/Score';

const Science = () => {
  const [nextQuestion, setNextQuestion] = useState('');
  const [nextAnswer, setNextAnswer] = useState('');
  const [nextRandom, setNextRandom] = useState('');
  const [counter, setCounter] = useState(0);
  const setScore = useSetScore();
  const data = useGetScore();
  const current = counter + 1;

  const getFinalScore = () =>  {
    return `${parseInt(data.score)} out of 50`;
  }

  const checkAnswer = (choice) =>  {
    if(choice === nextAnswer) {
      setScore(10);
      setCounter(counter + 1);
    }else{
      setCounter(counter + 1);
    }
  }

  useEffect(async () => {
    await axios.get('http://localhost:3000/api/questions')
    .then((response) => {
      const {question, answer, random} = {...response.data};
      
      setNextQuestion(question[counter]);
      setNextAnswer(answer[counter]);
      setNextRandom(random[counter]);
    })
    .catch((error) => {
      console.log(error)
    });
  }, [counter])

  return (
    <main className="science">
      <div className="quiz">
        <Score header='Technology' score={data.score} />
        
        <div className="quiz--body">
          <Progress current={current} />
          {
            (counter >= 5) 
              ? <p className="quiz--body_question">{getFinalScore()}</p> 
              : <Quiz nextQuestion={nextQuestion} nextAnswer={nextAnswer} nextRandom={nextRandom} checkAnswer={checkAnswer} />
          }
        </div>
      </div>
    </main>
  )
}

export default Science;