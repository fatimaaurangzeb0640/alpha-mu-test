export function generateRandomNumber() {
  // Generates a random number between 100000 and 999999
  return Math.floor(Math.random() * 900000) + 100000;
}

export function getRandomNumberForImage() {
  return Math.floor(Math.random() * 6) + 1;
}
