function sum3(a: number, b: number): number {
  return a + b
}

const total = sum3(1, 2)

total // .toLocaleString()  => 타입 추론을 통해 Number 객체에 대한 toLocaleString() 메서드 자동 완성 제공
