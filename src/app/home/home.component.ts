import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AddFormComponent } from '../add-form/add-form.component';
import { FormsModule } from '@angular/forms';
import {
  MatTabChangeEvent,
  MatTabGroup,
  MatTabsModule,
} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { TableListComponent } from '../table-list/table-list.component';
import { Router, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    AddFormComponent,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    TableListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  usersSubscription: Subscription = new Subscription();
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.usersSubscription = this.userService.updateUser$.subscribe((x) => {
      this.tabGroup.selectedIndex = x;
    });
  }
  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
  // selectTab(index: number): void {
  //   this.tabGroup.selectedIndex = index;
  // }
  onTabChange(event: MatTabChangeEvent): void {
    if (event.tab.textLabel == 'Add Form') {
      if (!this.userService.onEdit) {
        this.router.navigate(['/add-form']);
      }
    } else {
      this.router.navigate(['/table-list']);
    }
  }
}
