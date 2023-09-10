import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomUsersComponent } from './pages/random-user/random-user.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MapComponent } from './components/map/map.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RandomUsersComponent,
    UserCardComponent,
    AllUsersComponent,
    WeatherComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
