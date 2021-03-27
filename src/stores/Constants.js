export const findMaxResult = chosenOption => {
  let maxResult = 0;
  if (chosenOption.length === 1) {
    maxResult = 10;
  } else if (chosenOption.length === 2) {
    maxResult = 5;
  } else {
    maxResult = 4;
  }
  return maxResult;
};
