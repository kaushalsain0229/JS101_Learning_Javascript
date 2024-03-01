// var Name;
// Name = "KAUSHAL SAIN";
// console.log(Name);
// Name = "MAHESH KUMAR";
// console.log(Name);
// Name = "KAVITA DEVI ";
// console.log(Name
function operate(a, b, operation) {
  return operation(a, b);
}

var addition = function(x, y) {
  return x + y;
};

var result = operate(5, 3, addition);
console.log(result);