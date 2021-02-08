import axios from 'axios';
import {useState} from 'react';
export const getStaticProps = async (context) => {
  let question = '';

  await axios.get('http://localhost:3000/api/hello')
  .then(function (response) {
    question = response.data;
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
  const {question} = {...props};

  return (
    <main className="science">
      <h1>{question}</h1>
    </main>
  )
}

export default Science;