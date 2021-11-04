import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-TodoList',
  templateUrl: './TodoList.component.html',
  styleUrls: ['./TodoList.component.scss']
})
export class TodoListComponent implements OnInit {

  list: any[] = [
    { id: 0, todo: "first item" },
    { id: 1, todo: "second item" },
    { id: 2, todo: "third item" },
    { id: 3, todo: "first item" },
    { id: 4, todo: "second item" },
    { id: 5, todo: "third item" },
  ];

  constructor() { }

  ngOnInit() {
  }

  onRemove(item: any) {
    this.list = this.list.filter((element) => {
      return element.id != item.id;
    })
  }

}
