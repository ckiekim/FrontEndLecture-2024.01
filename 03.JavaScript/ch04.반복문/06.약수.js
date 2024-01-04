// 양의 정수 구하기
let num = 12;
let divisors = [];
for (let i = 1; i <= num; i++) {
    if (num % i == 0)
        divisors.push(i);
}
console.log(divisors);

// 두 수의 공약수 구하기
let num1 = 24, num2 = 60;
let commonDivisors = [];
for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i == 0 && num2 % i == 0)
        commonDivisors.push(i);
}
console.log(`${num1}, ${num2}의 공약수는 ${commonDivisors}`);
