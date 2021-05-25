

import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentesModule } from './componentes/componentes.module';

@NgModule({
  declarations: [
    AppComponent, MenuPrincipalComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatMenuModule, HttpClientModule, ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
