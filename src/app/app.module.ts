import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TableListComponent } from './table-list/table-list.component';
import { AddFormComponent } from './add-form/add-form.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MainService } from './main.service';

@NgModule({
  declarations: [
  ],
  imports: [
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatRadioModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [MainService],
})
export class AppModule {}
