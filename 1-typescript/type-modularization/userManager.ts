import { User } from './user.ts'

export interface UserManager {
  addUser(user: User): void
  getUser(id: number): User | undefined
  getUsers(): User[]
}
