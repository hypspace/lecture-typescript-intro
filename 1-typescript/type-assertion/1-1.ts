// TS 타입 단언
// : 개발자가 지정한 타입으로 간주

// 기본 예제 - DOM API 조작
const input = document.getElementById('search-input') // // HTMLElement | null
console.log(input.value) // Error!

const input2 = document.getElementById('search-input') as HTMLInputElement // HTMLInputElement
console.log(input2.value)
