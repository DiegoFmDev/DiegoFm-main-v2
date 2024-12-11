async function getCurrentWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.WEATHER_API_KEY}&units=metric`
  ).then((res) => res.json());

  return response;
}

<<<<<<< HEAD
export { getCurrentWeather };
=======
export { getCurrentWeather };
>>>>>>> 44057b2ccdfbde00950ac00fb6d4f4b3edb214d8
