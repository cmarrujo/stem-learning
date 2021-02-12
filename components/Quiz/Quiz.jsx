import React from 'react';

const Quiz = (props) => {
  return (
    <React.Fragment>
      <p className="quiz--body_question">{props.nextQuestion}</p>

      <button className="quiz--body_button" 
        onClick={(evt) => {
          props.checkAnswer(evt.target.innerText);
        }
      }>
        {props.nextAnswer}
      </button>

      <button className="quiz--body_button" 
        onClick={(evt) => {
          props.checkAnswer(evt.target.innerText);
        }
      }>
        {props.nextRandom[0]};
      </button>

      <button className="quiz--body_button" 
        onClick={(evt) => {
          props.checkAnswer(evt.target.innerText);
        }
      }>
        {props.nextRandom[1]};
      </button>

      <button className="quiz--body_button" 
        onClick={(evt) => {
          props.checkAnswer(evt.target.innerText);              
        }
      }>
        {props.nextRandom[2]};
      </button>
    </React.Fragment>
  );
}

export default Quiz;