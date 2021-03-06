import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', component: PagesComponent },
  { path: 'accueil', component: AccueilComponent},
  
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
