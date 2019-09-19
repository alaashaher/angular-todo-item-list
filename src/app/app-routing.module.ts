import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { RegisterComponent } from './components/register/register.component';
import { ItemListComponent } from './components/item-list/item-list.component';
const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'TodoList', component: TodoListComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'ItemList', component: ItemListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
