// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const randomQuestion = () => {
  const questions = [
    'At what temperature are Farenheit and Celsius equal to each other',
    'Which planet has the most moons?',
    'Which frozen gas forms dry ice?',
    'What type of sugar does the brain need for energy?',
    'Who was the ancient Greek god of medicine?',
  ]
  
  const answers = [
    '-40',
    'Jupiter',
    'Carbon Dioxide',
    'Glucose',
    'Ascepius',
  ]

  const random = Math.floor(Math.random() * Math.floor(5));

  const response = {"question" : questions[random], "answer" : answers[random]};

  return response;
}

export default (req, res) => {
  return res.send(randomQuestion());
}
