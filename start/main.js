"use strict"

// const button = document.querySelectorAll('button');
// const result = document.querySelector('#result');

// document.querySelector('table tbody').addEventListener('click', function(e) {
//     if (e.target.tagName === 'BUTTON') {
//         const buttonValue = e.target.textContent;
//         console.log('Button clicked:', buttonValue);
//         // 必要な処理をここに追加
//     }
// });



let numOne = '';
let operator = '';
let numTwo = '';
const $result = document.querySelector('#result');

// 数字ボタンのイベントリスナーを一括で追加
document.querySelectorAll('button').forEach(button => {
  if (button.id === 'clear' || button.id === 'calculate' || ['+', '-', '*', '/'].includes(button.textContent)) {
    // 演算子や特殊ボタンの処理はここではスキップ
  } else {
    button.addEventListener('click', onClickNumber);
  }
});

const onClickNumber = (event) => {
  if (!operator) {
    numOne += event.target.textContent;
    $result.textContent += event.target.textContent;
    return;
  }
  if (!numTwo) {
    $result.textContent = '';
  }
  numTwo += event.target.textContent;
  $result.textContent += event.target.textContent;
};

// 演算子ボタンの処理
const onClickOperator = (op) => () => {
  if (!numOne) {
    alert('숫자를 먼저 입력하세요.');
    return;
  }
  operator = op;
  // 演算子をどう表示するかは、デザインに依存します
  // $operator.textContent = op; // 例えば、演算子を直接表示する場合
  numTwo = ''; // 次の数字入力の準備
  $result.textContent += ' ' + op + ' '; // 演算子を結果表示に追加
};

// 演算子ボタンにイベントリスナーを追加
document.querySelector('#plus').addEventListener('click', onClickOperator('+'));
document.querySelector('#minus').addEventListener('click', onClickOperator('-'));
document.querySelector('#divide').addEventListener('click', onClickOperator('/'));
document.querySelector('#multiply').addEventListener('click', onClickOperator('*'));

// 計算実行
document.querySelector('#calculate').addEventListener('click', () => {
  if (!numTwo) {
    alert('2番目の数字を入力してください。');
    return;
  }
  // 計算処理
  const calculation = eval(numOne + operator + numTwo); // evalの使用は推奨されませんが、例としてここに含めます
  $result.textContent = calculation.toString();
  // 初期化
  numOne = calculation.toString();
  numTwo = '';
  operator = '';
});

// クリアボタン
document.querySelector('#clear').addEventListener('click', () => {
    numOne = '';
    operator = '';
    numTwo = '';
    $result.textContent = '';
});
