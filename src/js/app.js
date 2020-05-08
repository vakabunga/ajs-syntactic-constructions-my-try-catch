export default function converter(quantity) {
  try {
    if (Number(quantity)) {
      return quantity;
    }
    throw new Error('введенное значение не является числом');
  } catch (e) {
    return `От сервера получена ошибка: \n ${e}. \n Введите корректные данные`;
  }
}
