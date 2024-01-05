// 함수 사용의 필요성
function getDivisors(num) {
    let divisors = new Set();
    for (let i = 1; i <= num; i++) {
        if (num % i == 0)
            divisors.add(i);
    }
    return divisors;
}

let divisors1 = getDivisors(12);
let divisors2 = getDivisors(30);
console.log(divisors1);
console.log(divisors2);

let commonDivisors = [];
for (let item of divisors1) {
    if (divisors2.has(item))
        commonDivisors.push(item);
}
console.log(commonDivisors);
