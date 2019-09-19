import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoListProvider {
    TodoData: any;
    constructor(
        private http: HttpClient
        ) {
    }

    ToDoFunction() {
        this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe(value => {
        this.TodoData = value;
        this.TodoData.forEach(function (Item) {
            delete Item.completed;
            delete Item.userId;
            Item.editing = false;
        });
        // console.log(this.TodoData);
      });
    }


}