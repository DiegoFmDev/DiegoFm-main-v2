const handler = async (_, res) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=-17.798073&lng=-63.192509&formatted=0`
  ).then((res) => res.json());
    
  res.status(200).json(response);
};

export default handler;
