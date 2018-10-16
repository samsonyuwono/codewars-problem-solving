function persistence(num) {
  let arr = num.toString().split("");
  let multipliedCount = 0;
  let product;
  while (arr.length > 1) {
    product = arr.reduce((a, b) => {
      return a * b;
    });
    multipliedCount++;
    arr = product.toString().split("");
  }

  return multipliedCount;
}

console.log(persistence([5, 10]));
