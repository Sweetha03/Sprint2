import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { FlowerSeedsComponent } from './flower-seeds/flower-seeds.component';
import { VegetableSeedsComponent } from './vegetable-seeds/vegetable-seeds.component';
import { FruitSeedsComponent } from './fruit-seeds/fruit-seeds.component';
import { HerbSeedsComponent } from './herb-seeds/herb-seeds.component';
import { UserComponent } from './user/user.component';
import { RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    FlowerSeedsComponent,
    VegetableSeedsComponent,
    FruitSeedsComponent,
    HerbSeedsComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
