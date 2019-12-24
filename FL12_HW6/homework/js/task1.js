// Your code goes here
const a = parseFloat(prompt('Please enter number a'));
const b = parseFloat(prompt('Please enter number b'));
const c = parseFloat(prompt('Please enter number c'));

const f = 4;
const t = 2;




if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
  console.log('Invalid input data');
} else {
  const disq = (b * b) - (f * a * c);
  
  if (disq < 0) {
    console.log('no solution');
  } else if (disq === 0) {
    const x3 = Math.round(-b/t*a);
    console.log(x3);
  } else {
    // const sqrDisc = Math.sqrt(disq);
    // x1 = (-b - sqrDisc / t * a);
    // x2 = (-b + sqrDisc / t * a);
    const x1 = Math.round((-b + Math.sqrt(disq))/(t*a));
    const x2 = Math.round((-b - Math.sqrt(disq))/(t*a));
    console.log(x1, x2);
  }
}