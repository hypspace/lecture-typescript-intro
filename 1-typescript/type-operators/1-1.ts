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
  charter.type // charter.type만 자동완성 제공
  charter.hair // Error!
  charter.hairLod // Error!
}

// - 인터섹션
function myCharter2(charter: Male & Female): void {
  charter.type
  charter.hair
  charter.hairLod
}
