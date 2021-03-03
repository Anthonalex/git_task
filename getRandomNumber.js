function getRandomNumber() {
  return Math.random().toString(36).substring(2, 15);
}

console.log(getRandomNumber());
