import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeticioneshttpRoutingModule } from './peticioneshttp-routing.module';
import { PeticionesComponent } from './pages/peticiones/peticiones.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    PeticionesComponent,
    SearchbarComponent,
    ListComponent,
    
  ],
  imports: [
    CommonModule,
    PeticioneshttpRoutingModule,
    SharedModule,
    
  ],

  /*exports:[NavbarComponent]*/

})
export class PeticioneshttpModule { }
