import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  urls: any[] = [
    { url: "https://google.com", name: "Google" },
    { url: "https://centralia.edu", name: "Centralia College" },
    { url: "https://angular.io", name: "Angular" }
  ];

  constructor() { }

  ngOnInit() {
  }

  functionName(item: string) {
    console.log(item + ' was clicked');
  }

}
