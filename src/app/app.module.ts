import "zone.js";
import "reflect-metadata";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";

import { AppRoutingModule } from "./app-routing.module";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MdButtonModule,
  MdSidenavModule,
  MdToolbarModule,
  MdIconModule
} from "@angular/material";
import { MenuComponent } from "./components/menu/menu.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SettingsService } from "./providers/settings.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
