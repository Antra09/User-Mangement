import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-form',
  standalone:true,
  imports:[FormsModule],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.css'
})
export class AddFormComponent {

  user: User = { id: 0, name: '', dateOfBirth: '', gender: '' };
  isEditMode = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.user = this.userService.getUserById(id) || this.user;
      this.isEditMode = true;
      if (this.user) {
        this.user = { ...this.user };  // Prefill the form with the user data
        this.isEditMode = true;
         this.userService.tabchange.next(1);
         this.userService.onEdit=true;
      }
    }
    else{
      this.userService.onEdit=false;
    }
    
  }

  saveUser(): void {
    if (this.isEditMode) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.addUser(this.user);
    }
    this.userService.onEdit=false;
  }
}
