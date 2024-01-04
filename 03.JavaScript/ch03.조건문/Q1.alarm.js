// 백준도장 2884
// 알람 시계
let hour = 6, minute = 40;
let newHour = 0, newMin = 0;

if (minute >= 45) {
    newHour = hour;
    newMin = minute - 45;
} else {
    if (hour == 0) {
        newHour = 23;
        newMin = minute + 60 - 45;
    } else {
        newHour = hour - 1;
        newMin = minute + 60 - 45;
    }
}
console.log(`${hour}시 ${minute}분 --> ${newHour}시 ${newMin}분`);
