// TS 클래스

class Person {
  constructor(public name: string, public age: number) {
    // constructor: 초기화 메서드. 인스턴스 생성 즉시 constructor 로직 실행됨
    console.log('created')
    this.name = name
    this.age = age
  }
}

const person = new Person('wang', 21)
