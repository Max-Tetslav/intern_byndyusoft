import * as Yup from 'yup';

export const FORM_INITIAL_VALUES = {
  numList: '',
};

export const FORM_VALIDATION = Yup.object({
  numList: Yup.string().required('Обязательное поле!'),
});

export const MESSAGE_MAX_AMOUNT = 'Введите максимум 30 чисел';
export const MESSAGE_MIN_AMOUNT = 'В строке должно быть минимум 2 числа';
export const MESSAGE_ONLY_NUMBERS =
  'В строке должны быть только числа через запятую';
