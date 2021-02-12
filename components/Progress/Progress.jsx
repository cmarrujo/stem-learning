const Progress = (props) => {
  return (
    <div className="quiz--body_progress">
      <div className="quiz--body_progress-step" aria-current={props.current === 1}>1</div>
      <div className="quiz--body_progress-step" aria-current={props.current === 2}>2</div>
      <div className="quiz--body_progress-step" aria-current={props.current === 3}>3</div>
      <div className="quiz--body_progress-step" aria-current={props.current === 4}>4</div>
      <div className="quiz--body_progress-step" aria-current={props.current === 5}>5</div>
    </div>
  );
}

export default Progress;