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
