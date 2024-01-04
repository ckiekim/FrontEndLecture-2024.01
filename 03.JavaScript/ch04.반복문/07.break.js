// 주사위를 던져서 합이 21을 초과하면 탈출
let sum = 0;
/* while (sum <= 21) {
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum += dice;            // 조건을 변화하는 실행문이 없으면 무한 루프에 빠짐, 탈출하려면 Ctrl-C
}
console.log(sum); */

// 위의 방법보다 아래 방법이 더 많이 사용됨
while (true) {
    let dice = Math.ceil(Math.random()*6);
    console.log(dice);
    sum += dice;
    if (sum > 21)
        break;
}
console.log(sum);

// break는 loop의 한단계만 벗어날 수 있음
for (let i=0; i < 5; i++) {
    for (let k=0; k<5; k++) {
        if (k == 2)
            break;
    }
    console.log('point A');
}
console.log('point B');