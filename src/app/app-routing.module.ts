import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomUsersComponent } from './pages/random-user/random-user.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: RandomUsersComponent },
  { path: 'all-users', component: AllUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
