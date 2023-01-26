const add = function(a, b) {
	return a + b
};

const subtract = function(c, d) {
	return c - d
};

const sum = function(array) {
	let sum = 0;

  array.forEach(item => {
    sum += item;
  });

  console.log(sum);
  return sum;              
  //adds arrays up
};

const multiply = function(myValue) {
  return myValue.reduce((a,b)=> a*b)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(num) {
  if (num === 0 || num === 1)
  return 1; 
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
