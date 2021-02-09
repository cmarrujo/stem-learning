import axios from 'axios';
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
          <div className="quiz--body_progress">
            <div className="quiz--body_progress-step">1</div>
            <div className="quiz--body_progress-step">2</div>
            <div className="quiz--body_progress-step">3</div>
            <div className="quiz--body_progress-step">4</div>
            <div className="quiz--body_progress-step">5</div>
          </div>

          <p className="quiz--body_question">{question}</p>
          <button className="quiz--body_button" onClick={(evt) => {
            console.log(evt.target.innerText);
          }}>{answer}</button>
          <button className="quiz--body_button" onClick={(evt) => {
            console.log(evt.target.innerText);
          }}>{32}</button>
          <button className="quiz--body_button" onClick={(evt) => {
            console.log(evt.target.innerText);
          }}>{50}</button>
          <button className="quiz--body_button" onClick={(evt) => {
            console.log(evt.target.innerText);
          }}>{-20}</button>
        </div>
      </div>
    </main>
  )
}

export default Science;