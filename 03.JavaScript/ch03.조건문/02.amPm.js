let today = new Date();
console.log(today);             // 표준시 형태로 출력됨
let hour = today.getHours();
console.log(hour);              // Timezone 적용된 현재 시각
console.log(today.getMonth());  // +1 을 해주어야 현재월의 값이 제대로 나옴

if (hour < 12)
    console.log(`오전 ${hour} 시입니다.`);
if (hour >= 12)
    console.log(`오후 ${hour - 12} 시입니다.`);

// if-else
if (hour < 12)
    console.log(`오전 ${hour} 시입니다.`);
else
    console.log(`오후 ${hour - 12} 시입니다.`);
