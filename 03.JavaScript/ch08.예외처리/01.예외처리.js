// 에러가 발생하면 프로그램 실행이 중지가 됨

// error.error.error();

try {
    error.error.error();        // 에러가 발생할지도 모르는 코드를 try - catch 블록안에 작성함
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

console.log('여기가 끝입니다.');