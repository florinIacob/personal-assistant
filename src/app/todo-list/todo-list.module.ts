import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TodoListPage } from './todo-list.page';
import {TodoListSavePage} from "./save/todo-list.save.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
        {
            path: '',
            component: TodoListPage
        },
        {
            path: 'save',
            component: TodoListSavePage
        }
    ])
  ],
  declarations: [TodoListPage, TodoListSavePage]
})
export class TodoListPageModule {}
