// TS 연산자 활용

// - 유니온
interface Male {
  type: string
  hair: Array<number>
}

interface Female {
  type: string
  hairLod: Array<number>
}

function myCharter(charter: Male | Female): void {
  // charter.type만 자동완성 제공
}
