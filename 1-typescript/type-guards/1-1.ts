// TS 타입 가드
// : 코드 블록의 타입을 좁혀주는 기능. 타입을 좁히고 코드 안정성을 높힘

// - 사용자 정의 타입 가드
interface Developer {
  name: string
  skill: string
}

interface Person {
  name: string
  age: number
}

function introduce(): Developer | Person {
  return { name: 'wang', age: 21, skill: 'ts' }
}

const myIntroduce = introduce()
myIntroduce.name // name 타입 보장!
myIntroduce.skill // Error!
myIntroduce.age // Error!

function isDeveloper(obj: Developer | Person): obj is Developer {
  return (obj as Developer).skill !== undefined // //is & as(타입 단언 키워드)를 활용하여 타입을 좁혀 타입 가드함
}

if (isDeveloper(myIntroduce)) {
  myIntroduce.skill
} else {
  myIntroduce.age
}
