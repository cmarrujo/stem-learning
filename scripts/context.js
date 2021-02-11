import React, {createContext, useState, useContext} from 'react';
export const QuizContext = createContext();

const QuizContextProvider = (props) => {
  const [data, setData] = useState();

  return (
    <QuizContext.Provider value={{data, setData}}>
      {props.children}
    </QuizContext.Provider>
  );
}

export const useGetData = () => {
  const data = useContext(QuizContext);
  return data;
}

export const useSetData = () => {
  const {setData} = useContext(QuizContext);
  return (evt) => {
    // setData(evt.target.innerText);
    setData((prev) => ([prev + evt]));
  };
}

export default QuizContextProvider;