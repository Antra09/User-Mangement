import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-list',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit,OnDestroy {
  users: User[] = [];
  usersSubscription: Subscription = new Subscription;
  constructor(private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usersSubscription = this.userService.users$.subscribe(users => {
      this.users = users;
    });
    this.users = this.userService.getUsers();
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
  editUser(id: number): void {
    // Redirect to add form with prefilled data (using Angular Router)
    this.router.navigate(['/edit', id]);
    // this.userService.tabchange.next(1)
    // This requires navigation with query params or route parameters
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }
}
