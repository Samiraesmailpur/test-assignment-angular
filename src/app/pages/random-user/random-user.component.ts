import { Component } from '@angular/core';
import { ApiService } from '../../services/random-user.service';

@Component({
  selector: 'users',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss'],
})
export class RandomUsersComponent {
  user: any;
  userSaved: boolean = false;

  constructor(private apiService: ApiService) {
    this.user = null;
  }

  ngOnInit() {
    this.apiService.fetchRandomUser().subscribe((result: any) => {
      this.user = result.results[0];
    });
  }
  saveUser(user: any) {
    this.userSaved = true;
    const currentUserList = localStorage.getItem('users');

    if (currentUserList !== null) {
      const savedUsers = JSON.parse(currentUserList);
      savedUsers.push(user);
      localStorage.setItem('users', JSON.stringify(savedUsers));
    } else {
      localStorage.setItem('users', JSON.stringify([user]));
    }
  }
}
