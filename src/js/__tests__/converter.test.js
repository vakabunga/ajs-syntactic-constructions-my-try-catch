import converter from '../converter';

describe('Converter:', () => {
  test('should return number if its the Number', () => {
    const result = converter('1323');

    expect(result).toBe(1323);
  });
  test('should return smart info about error', () => {
    function result() {
      converter('0xff');
    }
    expect(result).toThrow();
  });
});
