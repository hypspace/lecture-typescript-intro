// TS 선언

// - 문자형
const str: string = 'hello message'

// - 숫자형
const num: number = 10

// - 배열
const arr: Array<number> = [1, 2, 3]
const arr2: number[] = [1, 2, 3]

// - 튜플
const arr3: [string, number] = ['text', 1]

// - 객체
const obj: object = {}
const obj2: { name: string; age: number } = {
  name: 'wang',
  age: 21,
}

// - 진리값
const show: boolean = true

// - 함수
function sum(a: number, b: number): number {
  return a + b
}

// : 옵셔널 파라미터
function log(text?: string) {
  console.log(text ? `출력: ${text}` : '출력')
}
