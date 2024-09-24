// TS 타입 호환

// - 인터페이스와 클래스에서 타입 호환
interface Person {
  name: string
  age: number
}

interface Developer extends Person {
  skill: string
}

const dev: Developer = {
  name: 'wang',
  age: 21,
  skill: 'ts',
}

function greet(myPerson: Person) {
  return `${myPerson.name}, ${myPerson.age}` // Developer는 Person을 상속하므로 타입 호환됨
}
greet(dev) // wang, 21

// - 함수에서 타입 호환

// :: 예제1
let add = function (a: number) {}
let sum = function (a: number, b: number) {}
sum = add // 타입 호환됨
add = sum // Error!

//  :: 예제2
type Callback = (data: string) => void

function processData(callback: Callback) {
  callback('processData()')
}

const myCallback = (data: string) => {
  console.log(data)
}
processData(myCallback) // 타입 호환됨

// - 제네릭에서 타입 호환
interface Empty<T> {
  // ...
}
let empty1: Empty<string>
let empty2: Empty<number>
empty1 = empty2 // Error!
empty2 = empty1 // 타입 호환됨

interface NotEmpty<T> {
  data: T
}
let notEmpty1: NotEmpty<string>
let notEmpty2: NotEmpty<number>
notEmpty1 = notEmpty2 // Error!
notEmpty2 = notEmpty1 // Error! - 구조적 타이핑 관점에서 구조체에 해당하는 data: T는 이 경우에는 호환되지 않음
