import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  { path: 'TodoListComponent', component: TodoListComponent },
  { path: 'RegisterComponent', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
