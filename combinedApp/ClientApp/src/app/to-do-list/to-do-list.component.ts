import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../ToDo';
import {ToDoService} from '../../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  toDos: ToDo[] = [];

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
   this.toDoService
      .getToDos()
      .subscribe((toDos) => this.toDos= toDos);
  }

  removeToDo(toDo: ToDo){
    // delete from the persisted todo store and remove from the UI.
    this.toDoService
      .removeToDo(toDo)
      .subscribe(() => (this.toDos = this.toDos.filter(t => t.id !== toDo.id)));
  }

  toggleCompleted(toDo: ToDo){
    toDo.complete = !toDo.complete;
    this.toDoService.updateToDoComplete(toDo).subscribe();
  }

}
