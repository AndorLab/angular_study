import { Component, OnInit } from '@angular/core';

import { StorageService } from '../../service/storage.service';
import { TodoListKey } from '../../constants/todoList';

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
  constructor(public storage: StorageService) {
  }

  ngOnInit() {
    this.todoList = this.storage.get(TodoListKey);
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
        this.storage.set(TodoListKey, this.todoList);
      }
    }
  }

  finish(todoTitle) {
    this.todoList = this.todoList.map(todo => {
      if (todo.title === todoTitle) {
        todo.status = todo.status === 1 ? 0 : 1;
        return todo;
      }
      return todo;
    });
    this.storage.set(TodoListKey, this.todoList);
  }
}
