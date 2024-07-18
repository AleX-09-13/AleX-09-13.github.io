const randomNumber = () => {
  return Math.floor(Math.random() * 20) + 1;
};
export { randomNumber };

const getRandomOperation = () => {
  const operation = ['+', '-'];
  return operation[Math.floor(Math.random() * operation.length)];
};
export { getRandomOperation };
