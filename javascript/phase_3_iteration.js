// Array#bubbleSort

Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (sorted === false) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        let temp = this[i + 1];
        this[i + 1]  = this[i];
        this[i] = temp;
        sorted = false;
      }
    }
  }

  return this;
};


// Array#substrings

String.prototype.substrings = function() {
  let substrings = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j <= this.length; j++) {
      substrings.push(this.slice(i, j));
    }
  }

  return substrings;
};
