import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-item-list';
  constructor(private router: Router) { }
  gotoHome() {
    this.router.navigate(['TodoListComponent']);
    console.log('todo');
  }
  gotoRedgester() {
    this.router.navigate(['RegisterComponent']);
  }
}
