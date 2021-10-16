import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const ROUTES:Routes=[
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    
  },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
