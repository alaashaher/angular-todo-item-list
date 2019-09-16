import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;
  filter: string;
  anyRemainingModel: boolean;


  constructor() { }

  ngOnInit() {
    this.anyRemainingModel = true;
    this.filter = 'all';
    this.beforeEditCache = '';
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
    ];
  }
  disableBtn(): boolean {
    let returnedValue: boolean;
    returnedValue = true;
    if (this.todoTitle.length !== 0) {
      returnedValue = false;
    }

    return returnedValue;
  }
  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      editing: false
    });

    this.todoTitle = '';
    this.idForTodo++;
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    }

    return this.todos;
  }

}
