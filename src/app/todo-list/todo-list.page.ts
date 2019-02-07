import { Component, OnInit } from '@angular/core';
import {TodoListService} from "./todo-list.service";
import {TodoItem} from "./model/todo-item.model";
import { LoadingController } from '@ionic/angular';
import {TodoItemContainer} from "./model/todo-item-container.model";
import {Router} from "@angular/router";

@Component({
    selector: 'todo-list',
    templateUrl: 'todo-list.page.html',
    styleUrls: ['todo-list.page.scss'],
    providers: [
        TodoListService
    ]
})
export class TodoListPage implements OnInit {
    private selectedTodoItem: any;
    public todoItemsContainer: TodoItemContainer;
    public loadingModal: any;

    constructor(private todoListService: TodoListService,
                private router: Router,
                public loadingController: LoadingController) {

    }

    ngOnInit() {
        var thisVar = this;
        this.presentLoading();

        this.todoListService.getTodoItemList().then(
            function (response) {
                if (response) {
                  thisVar.todoItemsContainer = response;
                }
                thisVar.dismissLoading();
            },
            function (error) {
                thisVar.dismissLoading();
            }
        )
    }

    public createItem($event) {
        this.router.navigate(['/todo-list/save'])
    }


    async presentLoading() {
        this.loadingModal = await this.loadingController.create({
            message: 'Loading list',
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
