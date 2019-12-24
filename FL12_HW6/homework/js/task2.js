// Your code goes here
const a = prompt('Please enter a');
const b = prompt('please enter b');
const c = prompt('please enter c');

if (a ===''|| b===''|| c==='' || isNaN(a)|| isNaN(b)|| isNaN(c)) {
  alert('input values should be only numbers');
  console.log('Triangle doesn’t exis');
} else if (a <=0 || b <= 0 || c <= 0){
  alert('A triangle must have 3 sides with a positive definite length');
  console.log('Triangle doesn’t exist');  
} else if ( a === c && a === b && b === c && b === a && c === a && c === b){
  console.log('Equilateral triangle');
} else if (a === b || a === c || b === a || b === c){
  console.log('Isosceles triangle');
} else {console.log('Scalene triangle')};