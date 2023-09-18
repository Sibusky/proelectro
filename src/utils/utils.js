export function formattedPrice(price) {
  const numberStr = price.toString();
  return numberStr.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
