// const solutions = solveEquation('2 * x^2 - 10 * x + 12');
module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  if (arr[0] === 'x^2') arr.unshift(1, '*');
  const a = +arr[0];
  const b = +(arr[3]+arr[4]);
  const c = +(arr[7]+arr[8]);
  const d = Math.pow(b, 2) - 4 * a * c;
  return (a > 0) ? [Math.round((-b - Math.pow(d, 1/2)) / (2 * a)), Math.round((-b + Math.pow(d, 1/2)) / (2 * a))] :
  [Math.round((-b + Math.pow(d, 1/2)) / (2 * a)), Math.round((-b - Math.pow(d, 1/2)) / (2 * a))];
}
