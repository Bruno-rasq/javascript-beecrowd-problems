let employee = Number(lines[0]);
let salary = parseFloat(lines[1]);
let sales = parseFloat(lines[2]);

let Bonus = ((sales * 15) / 100);
let salaryWithBonus = salary + Bonus;

console.log(`TOTAL = R$ ${salaryWithBonus.toFixed(2)}`);