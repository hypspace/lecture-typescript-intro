import { UserManagerImpl } from './userManagerImpl.ts'
// TS 타입 모듈 시스템

// : 인스턴스 생성
const userManager = new UserManagerImpl()

// : 사용자 추가
userManager.addUser({ id: 1, name: 'wang', email: 'wang@gmail.com' })
userManager.addUser({ id: 2, name: 'long', email: 'long@gmail.com' })

// : 사용자 조회
const user = userManager.getUser(1) // User | undefined
if (user) {
  console.log(`founded: ${user.name}, ${user.email}`)
}

// : 사용자들 출력
const users = userManager.getUsers() // User[]
console.log(users) // [{ id: 1, name: 'wang'... }, { id: 2, name: 'long'... }]
