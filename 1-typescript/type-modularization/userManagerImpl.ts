import { User } from './user.ts'
import { UserManager } from './userManager.ts'

export class UserManagerImpl implements UserManager {
  private users: User[] = []

  addUser(user: User): void {
    this.users.push(user)
  }

  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id)
  }

  getUsers(): User[] {
    return this.users
  }
}
