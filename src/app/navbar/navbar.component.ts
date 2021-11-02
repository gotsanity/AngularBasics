import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  urls: any[] = [
    { route: '', name: 'Home' },
    { route: '/about', name: 'About' },
    { route: '/profile/0', name: 'Jesse' },
    { route: '/profile/1', name: 'Sarah' }
  ];

  constructor() { }

  ngOnInit() {
  }

  functionName(item: string) {
    console.log(item + ' was clicked');
  }

}
