import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MeiaComponent } from './meia/meia.component';
import { CalcaComponent } from './calca/calca.component';
import { BlusaComponent } from './blusa/blusa.component';
import { ToucaComponent } from './touca/touca.component';
import { RegataComponent } from './regata/regata.component';
import { BoneComponent } from './bone/bone.component';
import { ChineloComponent } from './chinelo/chinelo.component';
import { BermudaComponent } from './bermuda/bermuda.component';
import { HomeComponent } from './home/home.component';
import { CamisaComponent } from './camisa/camisa.component';
import { ChaveiroComponent } from './chaveiro/chaveiro.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MeiaComponent,
    CalcaComponent,
    BlusaComponent,
    ToucaComponent,
    RegataComponent,
    BoneComponent,
    ChineloComponent,
    BermudaComponent,
    HomeComponent,
    CamisaComponent,
    ChaveiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
