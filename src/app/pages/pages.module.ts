import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayoutModule } from '../layout/layout.module';
import { AccueilComponent } from './accueil/accueil.component';

 


@NgModule({
  declarations: [
    PagesComponent,
    AccueilComponent,

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule
  ]
})
export class PagesModule { 
  
}
