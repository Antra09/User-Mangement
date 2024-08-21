import { Injectable } from '@angular/core';
import { User } from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  public onEdit=false;
  private nextId = 1;
  public usersSubject = new BehaviorSubject<User[]>(this.users);
  public tabchange = new BehaviorSubject<any>(0);
  users$ = this.usersSubject.asObservable();
 
  updateUser$ = this.tabchange.asObservable();
 
  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  addUser(user: User): void {
    let users: User[] = [];
    user.id = this.nextId++;
    users.push(user);
    this.users.push(users[0]);
    this.usersSubject.next(this.users);  // Emit updated user list
    this.tabchange.next(0);
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    this.tabchange.next(0);
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
