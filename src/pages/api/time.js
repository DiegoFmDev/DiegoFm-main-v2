<<<<<<< HEAD
const handler = async (_, res) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=-17.798073&lng=-63.192509&formatted=0`
=======
const handler = async (req, res) => {
  const response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=3.4517923&lng=-76.5324943&formatted=0`
>>>>>>> 44057b2ccdfbde00950ac00fb6d4f4b3edb214d8
  ).then((res) => res.json());
    
  res.status(200).json(response);
};

export default handler;
