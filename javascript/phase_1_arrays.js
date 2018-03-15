// Array#uniq

Array.prototype.uniq = function() {
  const uniqArray = [];
  this.forEach(function(el) {
    if (!uniqArray.includes(el)) {
      uniqArray.push(el);
    }
  });

  return uniqArray;
};


// Array#twoSum => 0
Array.prototype.twoSum = function() {
  let twoSumArr = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        twoSumArr.push([i,j]);
      }
    }
  }

  return twoSumArr;
};

// Array#transpose

Array.prototype.transpose = function() {
  let transposed = [];

  for (let i = 0; i < this.length; i++) {
    let row = [];

    for (let j = 0; j < this.length; j++) {
      row.push(this[j][i]);
    }

    transposed.push(row);
  }

  return transposed;
};
