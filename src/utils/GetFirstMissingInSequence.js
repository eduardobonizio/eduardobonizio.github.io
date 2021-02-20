export default function getFirstMissingInSequence(arrayOfNumbers) {
  const actual = arrayOfNumbers
    .sort((a, b) => a - b)
    .find((e, i) => e - arrayOfNumbers[i + 1] < -1);
  if (!actual) return 1;
  return actual;
}
