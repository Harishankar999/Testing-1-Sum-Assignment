function Tax(amount) {
  if (amount >= 250000 && amount <= 500000) {
    let tax = 10;
    let totalTax = amount * (tax / 100);
    let savings = amount - totalTax;
    return savings;
  }
  if (amount > 500000 && amount <= 1000000) {
    let tax = 20;
    let totalTax = amount * (tax / 100);
    let savings = amount - totalTax;
    return savings;
  }
  if (amount > 1000000) {
    let tax = 30;
    let totalTax = amount * (tax / 100);
    let savings = amount - totalTax;
    return savings;
  }
  return amount
}

module.exports = Tax;
