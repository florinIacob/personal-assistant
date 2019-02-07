import { Injectable } from '@angular/core';
import {TodoItem} from "./model/todo-item.model";
import {TodoItemContainer} from "./model/todo-item-container.model";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  getTodoItemList() {
      var thisObj = this;
      let promise = new Promise<TodoItemContainer>((resolve, reject) => {
          setTimeout(() => {
              try {
                  const todoItemsContainer = new TodoItemContainer();
                  let todoItems = thisObj.generateMockList();
                  thisObj.makeTodoItemsDivision(todoItemsContainer, todoItems);
                  resolve(todoItemsContainer);
              } catch (e) {
                  reject(e);
              }
          }, 2000);
      });

      return promise;
  }

  private generateMockList() : Array<TodoItem> {
      let todoItems: Array<TodoItem> = [];
      for (let i = 1; i < 27; i++) {
          todoItems.push({
              title: 'Item ' + i,
              note: 'This is item #' + i,
              icon: 'laptop',
              createdTime: new Date('2019-02-0' + (6 + (i / 6 | 0)) + ' 11:12').getTime(),
              todoTime: new Date('2019-02-0' + (6 + (i / 6 | 0)) + ' 14:24').getTime()
          });
      }
      return todoItems;
  }

  public makeTodoItemsDivision(container: TodoItemContainer, list: Array<TodoItem>) {
      var currentDate = new Date();
      var todayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0);
      var tomorrowDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0);
      var laterDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2, 0, 0);

      for (let todoItem of list) {
          var todoTime = todoItem.todoTime;

          if (!todoTime) {
              container.laterList.push(todoItem);
          } else {
              if (todoTime >= laterDate.getTime()) {
                  container.laterList.push(todoItem);
              } else if (todoTime >= tomorrowDate.getTime()) {
                  container.tomorrowList.push(todoItem);
              } else if (todoTime >= todayDate.getTime()) {
                  container.todayList.push(todoItem);
              } else {
                  container.outdatedList.push(todoItem);
              }
          }
      }
  }
}
