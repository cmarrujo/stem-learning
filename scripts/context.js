import React, {createContext, useState, useContext} from 'react';
export const QuizContext = createContext();

const QuizContextProvider = (props) => {
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider value={{score, setScore}}>
      {props.children}
    </QuizContext.Provider>
  );
}

export const useGetScore = () => {
  const score = useContext(QuizContext);
  return score;
}

export const useSetScore = () => {
  const {setScore} = useContext(QuizContext);
  return (evt) => {
    setScore(prev => prev += evt);
  };
}

export default QuizContextProvider;