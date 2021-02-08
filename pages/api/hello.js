// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const randomQuestion = () => {
  const questions = [
    'At what temperature are Farenheit and Celsius equal to each other',
    'Which planet has the most moons?',
    'Which frozen gas forms dry ice?',
  ]

  const random = Math.floor(Math.random() * Math.floor(3));;

  return questions[random];
}

export default (req, res) => {
  return res.send(randomQuestion());
}
