import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableListComponent } from './table-list/table-list.component';
import { AddFormComponent } from './add-form/add-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TableListComponent },
  { path: 'table-list', component: TableListComponent },
  { path: 'add-form', component: AddFormComponent },
  { path: 'edit/:id', component: AddFormComponent },  // For editing records
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routes: Routes = [];
