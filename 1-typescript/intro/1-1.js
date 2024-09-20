// TS를 쓰는 이유:
//  - 1. 에러 방지
//  - 2. 타입 추론을 통한 자동 완성

function sum(a, b) {
  return a + b
}
console.log(sum(1, '1')) // '11'
