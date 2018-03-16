// range(start, end)

function range(start, end) {
  let arr = [start];

  if (start === end) {
    return arr;
  }

  return arr.concat(range(start + 1, end));
}

function sumRec(arr) {
  let sum = arr[0];

  if (arr.length === 1) {
    return sum;
  }

  return sum + sumRec(arr.slice(1, arr.length));
}

function exponent1(base, exp) {
  if (exp === 0) return 1;
  return base * exponent1(base, exp - 1);
}

function exponent2(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  if (exp % 2 === 0) {
    return exponent1(exponent2(base, exp / 2), 2);
  }
  else if (exp % 2 === 1) {
    return base * exponent1((exponent2(base, (exp - 1) / 2)), 2);
  }
}
