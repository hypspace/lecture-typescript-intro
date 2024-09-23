// TS 인터페이스

// 변수
interface User {
  name: string
  age: number
}

const wang: User = {
  name: 'wang',
  age: 21,
}

// - 함수 구조
interface GetUsername {
  (user: User): string
}

// - 함수 인자
function getUsername(user: User) {
  return user.name
}

// - 인덱싱 방식
interface stringArray {
  [index: number]: string
}

const arr: stringArray = ['A', 'B', 'C']
// arr[0] = 10 // Error!

// : 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

const obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile'] = 'a' // Error!

// - 확장 상속
interface Person {
  name: string
  age: number
}

interface Developer extends Person {
  skills: Array<string>
}

const wang21: Developer = {
  name: 'wang',
  age: 21,
  skills: ['JS', 'TS', 'Node'],
}
