interface User {
  name: string
  age: number
}

const wang: User = {
  name: 'wang',
  age: 21,
}

interface GetUsername {
  (user: User): string
}

function getUsername(user: User) {
  return user.name
}

interface stringArray {
  [index: number]: string
}

const arr: stringArray = ['A', 'B', 'C']
arr[0] = 10
