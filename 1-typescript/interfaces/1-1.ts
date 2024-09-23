interface User {
  name: string
  age: number
}

const wang: User = {
  name: 'wang',
  age: 21,
}

function getUsername(user: User) {
  return user.name
}
