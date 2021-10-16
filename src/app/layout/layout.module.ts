import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TopFooterComponent } from './top-footer/top-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGoogle, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


const COMPONENTS = [TopHeaderComponent, NavbarComponent, TopFooterComponent,FooterComponent];
@NgModule({
  declarations: [
    ...COMPONENTS,
     
    ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    

  ],
  exports: [...COMPONENTS]
})
export class LayoutModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(faFacebookF, faInstagram,faLinkedinIn,faGoogle);
  }
 }
