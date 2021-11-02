import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileName = "";

  currentID: number = -1;
  currentProfile: any = null;

  fakeDB: any[] = [
    {
      name: "Jesse",
      age: 39,
      favoriteGame: "Path of Exile"
    },
    {
      name: "Sarah",
      age: 35,
      favoriteGame: "Path of Exile"
    },
    {
      name: "Bob",
      age: 21,
      favoriteGame: "Call of Duty"
    },
    {
      name: "Alice",
      age: 25,
      favoriteGame: "World of Warcraft"
    }
  ];

  constructor(private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.currentID = params['id'];
      
      if (this.fakeDB.length - 1 < this.currentID || this.currentID < 0) {
        this.goHome();
        // return;
      }

      this.currentProfile = this.fakeDB[this.currentID];
    });

  }

  goHome() {
    this.route.navigate(['home']);
  }

}

// localhost:4200/profile/john?qparam=value&qparam2=value2