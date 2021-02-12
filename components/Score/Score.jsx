const Score = (props) => {
  return (
    <div className="quiz--header">
      <h1 className="quiz--header_text">Science</h1>
      <h2 className="quiz--header_score">Score: {props.score}</h2>
    </div>
  );
}

export default Score;