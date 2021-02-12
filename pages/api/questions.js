// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const randomQuestion = () => {
  const questions = [
    'Farenheit and Celsius are equal to each other at?',
    'Which of these planets has the most moons?',
    'Which frozen gas forms hot or dry ice?',
    'What type of sugar does the brain need for energy?',
    'Who was the ancient Greek god of medicine?',
  ]
  
  const answers = [
    '-40°',
    'Jupiter',
    'Carbon Dioxide',
    'Glucose',
    'Ascepius',
  ]

  const random = [
    ["40°", "32°", "-30°"],
    ['Mars', 'Saturn', 'Neptune'],
    ['Oxygen', 'Hydrogen', 'Helium'],
    ['Sucrose', 'Fructose', 'Lactose'],
    ['Zeus', 'Hades', 'Ares']
  ];

  const response = {
    "question" : questions, 
    "answer" : answers,
    "random" : random
  };

  return response;
}

export default (req, res) => {
  return res.send(randomQuestion());
}
