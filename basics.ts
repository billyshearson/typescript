function add(n1: number, n2: number, showResult: boolean) {
  console.log(typeof n1);
  if (showResult) {
    console.log(n1 + n2);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 5;

const printResult = true;
const result = add(number1, number2, printResult);
