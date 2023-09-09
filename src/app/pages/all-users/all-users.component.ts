import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
})
export class AllUsersComponent implements OnInit {
  users: any[] = [];

  constructor() {
    this.users = [];
  }

  ngOnInit() {
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
  }
}
