// TS 제네릭

// - 함수에서 제네릭 사용
function getValue<T>(value: T): T {
  return value
}

getValue('a') // 간단한 경우에는 자동 추론을 활용해 간단히 작성할 수도 있음
getValue<number>(10)
getValue<boolean>(true)
