import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  
  ngOnInit(): void {
    console.log("I have fired");
  }

  title = 'My Project';

  isRed = false;

  toggleRed() {
    this.isRed = !this.isRed;
  }
}
