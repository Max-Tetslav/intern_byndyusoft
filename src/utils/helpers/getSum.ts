import {
  MESSAGE_MAX_AMOUNT,
  MESSAGE_MIN_AMOUNT,
  MESSAGE_ONLY_NUMBERS,
} from '../constants/form';

const getSum = (value: string) => {
  let numList = value.replaceAll(' ', '').split(',').map(Number);

  if (
    value[value.length - 1] === '' ||
    numList.some((item) => Number.isNaN(item))
  ) {
    return MESSAGE_ONLY_NUMBERS;
  }

  if (numList.length === 1) {
    return MESSAGE_MIN_AMOUNT;
  }

  if (numList.length > 30) {
    return MESSAGE_MAX_AMOUNT;
  }

  const first = Math.min(...numList);
  const firstIndex = numList.findIndex((item) => item === first);

  numList = numList.filter((_, index) => index !== firstIndex);

  const second = Math.min(...numList);

  return String(first + second);
};

export default getSum;
