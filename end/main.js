let numOne = '';
let operator  = '';
let numTwo = '';

const $operator = document.querySelector('#operator');
const $result = document.querySelector('#result');

//나중에 코드를 줄이는 방법도 외워야 함 (라고 해서 전부가 할수 있는건 아니다 )
document.querySelector('#num-0').addEventListener('click', () => {
    if (operator) {  //플러스가 아직 없다 플러스 전에 숫자 넣기
        numOne += '0';
    } else { //플러스로 채워져있다 마지막을 넣기
        numTwo += '0';
    }
});
document.querySelector('#num-1').addEventListener('click', () => {
     if (operator) { //비어있지 않다
        numOne += '1';
    } else { //비어있다
        numTwo += '1';
    }
});
document.querySelector('#num-2').addEventListener('click', () => {});
document.querySelector('#num-3').addEventListener('click', () => {});
document.querySelector('#num-4').addEventListener('click', () => {});
document.querySelector('#num-5').addEventListener('click', () => {});
document.querySelector('#num-6').addEventListener('click', () => {});
document.querySelector('#num-7').addEventListener('click', () => {});
document.querySelector('#num-8').addEventListener('click', () => {});
document.querySelector('#num-9').addEventListener('click', () => {});
document.querySelector('#plus').addEventListener('click', () => {});  //+ 꼽하기
document.querySelector('#minus').addEventListener('click', () => {});  //_ 빼기
document.querySelector('#divide').addEventListener('click', () => {});  //* 더하기
document.querySelector('#multiply').addEventListener('click', () => {});  // / 나누기
document.querySelector('#calculate').addEventListener('click', () => {});  //계산하기
document.querySelector('#clear').addEventListener('click', () => {});  //C 지우기
