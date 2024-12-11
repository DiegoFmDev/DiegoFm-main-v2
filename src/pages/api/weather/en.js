<<<<<<< HEAD
const handler = async (_, res) => {
=======
const handler = async (req, res) => {
>>>>>>> 44057b2ccdfbde00950ac00fb6d4f4b3edb214d8
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Santa%20Cruz%20de%20la%20Sierra,%20BO&appid=${process.env.WEATHER_API_KEY}&units=metric`
  ).then((res) => res.json());

  res.status(200).json(response);
};

export default handler;
