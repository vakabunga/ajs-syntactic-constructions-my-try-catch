export default function converter(quantity) {
  try {
    if (quantity === parseInt(quantity, 10).toString()) {
      return Number(quantity);
    }
    throw new Error('введенное значение не является десятичным числом');
  } catch (e) {
    throw Error;
  }
}
