import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BermudaComponent } from './bermuda/bermuda.component';
import { BlusaComponent } from './blusa/blusa.component';
import { BoneComponent } from './bone/bone.component';
import { CalcaComponent } from './calca/calca.component';
import { CamisaComponent } from './camisa/camisa.component';
import { ChaveiroComponent } from './chaveiro/chaveiro.component';
import { ChineloComponent } from './chinelo/chinelo.component';
import { HomeComponent } from './home/home.component';
import { MeiaComponent } from './meia/meia.component';
import { MenuComponent } from './menu/menu.component';
import { RegataComponent } from './regata/regata.component';
import { ToucaComponent } from './touca/touca.component';

const routes: Routes = [
{path:'touca',component: ToucaComponent}, 
{path:'bermuda', component: BermudaComponent},
{path:'blusa', component: BlusaComponent},
{path:'bone', component: BoneComponent},
{path:'calca', component: CalcaComponent},
{path:'chinelo', component: ChineloComponent},
{path:'meia', component: MeiaComponent},
{path:'menu', component: MenuComponent},
{path:'regata',component: RegataComponent},
{path:'home', component: HomeComponent},
{path:'chaveiro', component: ChaveiroComponent},
{path:'camisa', component: CamisaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
