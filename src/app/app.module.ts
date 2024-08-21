import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TableListComponent } from './table-list/table-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FormsModule } from '@angular/forms';
// Add more Material modules as needed

@NgModule({
  declarations:[
    // HomeComponent,
    // TableListComponent,
    // AddFormComponent
  ],
  imports: [
    // other imports
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    // other Material modules
  ],
  // other properties
})
export class AppModule { }
