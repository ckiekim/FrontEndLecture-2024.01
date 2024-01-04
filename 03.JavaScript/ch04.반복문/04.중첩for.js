// 중첩 반복문
// 1. 별 다섯개를 다섯줄 그리기
for (let i = 0; i < 5; i++) {       // 다섯줄
    let star = '';
    for (let k = 0; k < 5; k++) {   // 별 다섯개
        star += '*';
    }
    console.log(star);
}

// 2. 다이아몬드 그리기 (1사분면)
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < i + 1; k++) {
        star += '*';
    }
    console.log(star);
}

// 4사분면
for (let i = 5; i > 0; i--) {
    let star = '';
    for (let k = 0; k < i; k++) {
        star += '*';
    }
    console.log(star);
}

// 2사분면
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < 4 - i; k++) {
        star += ' ';
    }
    for (let k = 0; k < i + 1; k++) {
        star += '*';
    }
    console.log(star);
}

// 3사분면
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < i; k++) {
        star += ' ';
    }
    for (let k = 0; k < 5 - i; k++) {
        star += '*';
    }
    console.log(star);
}

// 다이아몬드 완성
let maxDia = 7;
let N = parseInt(7 / 2);
for (let i = 0; i <= N; i++) {
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
for (let i = N-1; i >= 0; i--) {
    let line = '';
    for (let k = 0; k < N - i; k++)
        line += ' ';
    for (let k = 0; k < 2 * i + 1; k++)
        line += '*';
    console.log(line);
}
