import {
  MESSAGE_MAX_AMOUNT,
  MESSAGE_MIN_AMOUNT,
  MESSAGE_ONLY_NUMBERS,
} from '../constants/form';
import getSum from './getSum';

describe('Сумма двух наименьших чисел', () => {
  test('Валидные данные', () => {
    expect(getSum('1,3,4,5')).toEqual('4');
  });

  test('Последний символ - запятая', () => {
    expect(getSum('1,2,3,4,')).toEqual(MESSAGE_ONLY_NUMBERS);
  });

  test('Лишние пробелы', () => {
    expect(getSum('   -10,  1,   3,  4')).toEqual('-9');
  });

  test('Одно число в списке', () => {
    expect(getSum('1')).toEqual(MESSAGE_MIN_AMOUNT);
  });

  test('Два одинаковых наименьших числа', () => {
    expect(getSum('-1,-1,4,6,7')).toEqual('-2');
  });

  test('Неверная строка', () => {
    expect(getSum('dfsf,ds,,4')).toEqual(MESSAGE_ONLY_NUMBERS);
  });

  test('Слишком длинный список', () => {
    expect(
      getSum('1,3,4,5,3,4,5,6,7,8,9,2,4,3,5,6,5,3,5,4,5,5,5,3,5,5,5,4,5,9,8'),
    ).toEqual(MESSAGE_MAX_AMOUNT);
  });
});
