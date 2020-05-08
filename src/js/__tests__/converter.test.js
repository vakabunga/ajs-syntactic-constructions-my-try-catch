import converter from '../app';

describe('Converter:', () => {
  test('should return number if its the Number', () => {
    const result = converter('1323');

    expect(result).toBe('1323');
  });
  test('should return smart info about error', () => {
    const result = converter('13sdf23');
    expect(result).toBe('От сервера получена ошибка: \n Error: введенное значение не является числом. \n Введите корректные данные');
  });
});
