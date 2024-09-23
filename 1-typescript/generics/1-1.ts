// TS 제네릭

// - 함수에서 제네릭 사용
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
