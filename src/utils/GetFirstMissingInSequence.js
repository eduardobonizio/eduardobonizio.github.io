export default function getFirstMissingInSequence(arrayOfNumbers) {
  return (
    arrayOfNumbers
      .sort((a, b) => a - b)
      .find((e, i) => e - arrayOfNumbers[i + 1] < -1) + 1
  );
}
