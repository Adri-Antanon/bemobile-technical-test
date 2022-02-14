const getExpirationDate = () => {
  const hourInMiliseconds = 60 * 60 * 1000;
  const expirationDate = new Date().getTime() + hourInMiliseconds;

  const today = new Date().getTime();
  return { expirationDate, today };
};

export default getExpirationDate;
