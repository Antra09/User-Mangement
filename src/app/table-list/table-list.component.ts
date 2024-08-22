import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [FormsModule, CommonModule, MatTableModule, MatIconModule],
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css'],
})
export class TableListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  usersSubscription: Subscription = new Subscription();
  displayedColumns: String[] = [
    'name',
    'dateOfBirth',
    'gender',
    'edit',
    'delete',
  ];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.usersSubscription = this.userService.users$.subscribe((users) => {
      this.users = users;
    });
    this.users = this.userService.getUsers();
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
  editUser(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  }
}
