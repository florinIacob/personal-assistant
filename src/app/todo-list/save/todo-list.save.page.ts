import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {TodoListService} from "../todo-list.service";
import {TodoItem} from "../model/todo-item.model";

@Component({
    selector: 'todo-list-save',
    templateUrl: 'todo-list.save.page.html',
    styleUrls: ['todo-list.save.page.scss'],
    providers: [
        TodoListService
    ]
})
export class TodoListSavePage implements OnInit {
    private todoItem: TodoItem;
    public loadingModal: any;

    constructor(private todoListService: TodoListService,
                public loadingController: LoadingController) {

    }

    ngOnInit() {
        var thisVar = this;
        this.todoItem = new TodoItem();
    }


    async presentLoading() {
        this.loadingModal = await this.loadingController.create({
            message: 'Loading item',
            duration: 10000
        });
        this.loadingModal.present();
    }
    async dismissLoading() {
        if (this.loadingModal) {
            this.loadingModal.dismiss();
            this.loadingModal = null;
        }
    }

}
