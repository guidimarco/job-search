const nextElementInList = (list, value) => {
  const currentIndex = list.indexOf(value);
  const nextValueIndex = (currentIndex + 1) % list.length;
  const nextValue = list[nextValueIndex];
  return nextValue;
};

export default nextElementInList;
