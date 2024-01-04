// 1. 완전수(Perfect number)
// 자기 자신을 제외한 약수의 합과 자기자신이 같은 수
// 6 = 1 + 2 + 3
// 28 = 1 + 2 + 4 + 7 + 14
// 10000 이하의 수 중에서 완전수 4개를 찾으세요.
/* let num = 28;
let sum = 0;
for (let i = 1; i < 28; i++) {
    if (num % i == 0)
        sum += i;
}
console.log(sum); */

for (let i = 2; i <= 10000; i++) {
    let divSum = 0;
    for (let k = 1; k < i; k++) {       // 1에서부터 자기자신 전까지
        if (i % k == 0)                 // 약수의 합 구하기
            divSum += k;
    }
    if (i == divSum)        // 자기 자신을 제외한 약수의 합과 자기자신이 같으면
        console.log(i);
}

// 2. a + b + c = 1000 을 만족하는 피타고라스 수 (단, a < b < c)
// a * a + b * b = c * c
for (let a = 1; a <= 332; a++) {
    for (let b = a + 1; b <= 500; b++) {
        c = 1000 - a - b;
        if (a * a + b * b == c * c) {
            console.log(a, b, c);
            process.exit(0);                // 프로그램 실행을 종료
        }
    }
}