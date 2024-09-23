// TS 제네릭

// - 함수에서 제네릭
function getValue<T>(value: T): T {
  return value
}

getValue('a') // 간단한 경우에는 자동 추론을 활용해 간단히 작성할 수도 있음
getValue<number>(10)
getValue<boolean>(true)

// - 제네릭 사용 이유: bad case ===> open closed 원칙으로 해결할 것(중복된 코드를 줄여 확장은 열려있으되 변경은 닫혀있어야 함)
function logString(value: string) {
  console.log(value)
}
function logNumber(value: number) {
  console.log(value)
}

// - 제네릭 사용 이유: good case
function logText<T>(text: T): T {
  console.log(text)
  return text
}

logText<string>('').charAt(0) // 결과값 추론을 통한 API 제공
logText<number>(1).toString()

// - 클래스에서 제네릭
class Box<T> {
  // #items: T[] = []
  private items: T[] = []

  getItems(): T[] {
    return this.items
  }

  add(item: T): void {
    this.items.push(item)
  }
}

const numberBox = new Box<number>()
numberBox.add(1)
numberBox.add(2)
console.log(numberBox.getItems()) // [1, 2]

const stringBox = new Box<string>()
stringBox.add('a')
stringBox.add('b')
console.log(stringBox.getItems()) // [a, b]

// - 인터페이스에서 제네릭
interface Dropdown<T> {
  items: T[]
  selectItem: (item: T) => void
}

class MyDropdown<T> implements Dropdown<T> {
  items: T[]
  constructor(items: T[]) {
    this.items = items
  }

  selectItem(item: T): void {
    console.log('selectItem(): ', item)
  }
}

const stringDropdown = new MyDropdown<string>(['a', 'b', 'c'])
const numberDropdown = new MyDropdown<number>([1, 2, 3])
stringDropdown.selectItem('a') // selectItem(): a
numberDropdown.selectItem(1) // selectItem(): 1

// - 제네릭 타입 제한(=제약)

// : 예문1 - 기본
function getValueLength1<T>(value: T): number {
  return value.length // Error!
}
function getValueLength2<T>(value: T[]): number {
  return value.length
}
getValueLength2(1) // Error!

// : 예문2 - 정의된 타입
function logLength<T extends { length: number }>(item: T): void {
  console.log(item.length)
}
logLength('hello') // 5
logLength([1, 2, 3]) // 3
logLength(123) // Error!: The 'number' type does not have a 'length' attribute.

function logTextLength<T>(text: T[]): void {
  console.log(text.length)
}
logTextLength('a') // Error!

// : 예문2 - keyof
interface ShoppingItem {
  type: string
  name: string
  price: number
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption
}
getShoppingItemOption('10') // Error!
getShoppingItemOption(10) // Error!
getShoppingItemOption('type')
getShoppingItemOption('name')
getShoppingItemOption('price')

interface Person {
  name: string
  age: number
}
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}
const person: Person = {
  name: 'wang',
  age: 21,
}
const myName = getProperty(person, 'name') // wang
const myAge = getProperty(person, 'age') // 21
