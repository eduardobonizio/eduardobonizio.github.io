export default function getFirstMissingInSequence(arrayOfNumbers) {
  const actual = arrayOfNumbers
    .sort((a, b) => a - b)
    .find((e, i) => e - arrayOfNumbers[i + 1] < -1);
  if (actual) return actual + 1;
  const lastQuestion = arrayOfNumbers[arrayOfNumbers.length - 1];
  return arrayOfNumbers[0] ? lastQuestion + 1 : 1;
}
