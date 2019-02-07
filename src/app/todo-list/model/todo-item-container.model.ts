
import {TodoItem} from "./todo-item.model";

export class TodoItemContainer {

    outdatedList: Array<TodoItem> = [];
    todayList: Array<TodoItem> = [];
    tomorrowList: Array<TodoItem> = [];
    laterList: Array<TodoItem> = [];
}