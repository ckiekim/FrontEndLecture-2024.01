// Array 객체

// 1. 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array('Audi', 'Benz', 'BMW');
console.log(cars);

// 2. 배열 속성
console.log(cars.length);

// 3. 배열 메소드
// 3-1. concat()
let newFruits = fruits.concat('mango', 'orange');
console.log(fruits);
console.log(newFruits);

// 3-2. join()
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);

// 3-3. pop()*      * 자기 파괴적(self destructive) 메소드
console.log(cars.pop());            // 맨 뒤에 있는 요소를 끄집어 냄
console.log(cars);

// 3-4. push()*
cars.push('Volkswagen'); cars.push('Hyundai');
console.log(cars);

// 3-5. reverse()*
cars.reverse();
console.log(cars);

// 3-6. sort()*
let numbers = [34, 56, 12, 20, 64, 46, 72];

// 오름차순(Ascending order)
numbers.sort();
cars.sort();
console.log(cars);

// 내림차순(Descending order)
numbers.sort(function(a, b) {
    return b - a;
});
cars.sort(function(a, b) {
    if (a < b)
        return 1;
    if (a > b)
        return -1;
    return 0;
});
console.log(cars);

let person = [
    {name:'james', age:30, job:'programmer'},
    {name:'maria', age:24, job:'student'},
    {name:'brian', age:27, job:'teacher'}
];
// 이름의 알파벳 오름차순으로 정렬
person.sort((a, b) => {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
});
// 나이의 내림차순으로 정렬
person.sort((a, b) => b.age - a.age);
console.log(person);

// 3-7. slice()
console.log(fruits.slice(0, 2));
console.log(fruits);


// 4. 응용
// 4-1. 문자열 뒤집기
let str = 'Hello, Javascript';
console.log(str.split('').reverse().join(''));

// 4-2. 어떤 문자열이 회문(palindrome)인가?
function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr;
}
console.log(isPalindrome('우영우'));
console.log(isPalindrome('소주 만병만 주소'));
