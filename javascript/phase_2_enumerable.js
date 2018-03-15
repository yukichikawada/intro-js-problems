// Array.myEach(callback)

Array.prototype.myEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

// Array#myMap(callback)

Array.prototype.myMap = function(cb) {

  let mapped = [];
//[1,2,3].myEach( function(num)  { num * 2 })
  this.myEach( el => {
    mapped.push(cb(el));
  });

  return mapped;
};


// Array#myReduce(callback[, initialValue])
Array.prototype.myReduce = function(cb, initialValue = undefined) {
  let i = 0;
  if (initialValue === undefined) {
    initialValue = this[0];
    i++;
  }
  let acc = initialValue;

  for (i; i < this.length; i++) {
    acc = cb(acc, this[i]);
  }

  return acc;
};

function timesTwo(acc, el) {
  return acc * el;
}

// def myEach(&prc) // 1 + 2
//   i = 0
//   while i < self.length
//     prc.call(self[i])
//     i += 2
//   end
//
//   self
// end
//
// def myMap(&prc)
//   mapped = []
// //1,2,3,
//   self.myEach do |el|
//     mapped << prc.call(el)
//   end
//
//   mapped
// end
