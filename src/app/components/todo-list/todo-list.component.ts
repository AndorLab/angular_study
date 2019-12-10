import { Component, OnInit } from '@angular/core';

interface ITodo {
  title: string;
  status: number; // 0 为完成，1 完成，2 其他
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  public input = '';
  public todoList: Array<ITodo> = [];
  constructor() { }

  ngOnInit() {
  }

  hasInArr(arr, item) {
    if (!item) { return true; }
    return arr.some(a => a.title === item);
  }

  addTodo(evt) {
    if (evt.keyCode === 13) {
      if (!this.hasInArr(this.todoList, this.input)) {
        this.todoList.push({
          title: this.input,
          status: 0,
        });
        this.input = '';
      }


    }
  }

  finish(todoTitle) {
    this.todoList = this.todoList.map(todo => {
      if (todo.title === todoTitle) {
        todo.status = 1;
        return todo;
      }

      return todo;
    });
  }
}
