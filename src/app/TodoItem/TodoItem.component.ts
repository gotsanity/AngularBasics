import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-TodoItem',
  templateUrl: './TodoItem.component.html',
  styleUrls: ['./TodoItem.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: any;
  @Output() removeEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  removeMe(value: any) {
    console.log("remove", this.item);
    this.removeEvent.emit(value);
  }

}
