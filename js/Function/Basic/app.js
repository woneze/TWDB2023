function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}
// firstName은 palceholder와 비슷한 역할을 하고 있음
// firstName = 매개변수
// firstName의 위치에 임의의 값을 넣어 함수 내부로 전달하게 되면
// 그 임의의 값을 인수라고 함.

function repeat(str, numTimes) {
    let result = '';
    for(let i = 0; i < numTimes; i++){
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}

function capitalize(str) {
    let capital = str[0].toUpperCase();
    let slicedStr = str.slice(1);
    return capital + slicedStr;
}