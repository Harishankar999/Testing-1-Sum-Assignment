function sum(...args) {
  let total = [...args].reduce((acc, elem) => acc + Number(elem), 0);
  return total;
}

module.exports = sum;
