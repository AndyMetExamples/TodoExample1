import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ToDo } from '../../ToDo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input()
  toDo!: ToDo;
  @Output() onRemoveToDo : EventEmitter<ToDo> = new EventEmitter
  @Output() onToggleComplete : EventEmitter<ToDo> = new EventEmitter

  constructor() { }

  ngOnInit(): void { }

  onRemove(toDo: ToDo){
    console.log(toDo);
    this.onRemoveToDo.emit(toDo);
  }

  onToggle(toDo: ToDo){
    console.log(toDo);
    this.onToggleComplete.emit(toDo);
  }

}
