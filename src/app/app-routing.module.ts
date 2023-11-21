import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/*configuraciones de rutas*/
const routes: Routes = [
{

  
    path: '',
    loadChildren: () =>import('./welcome/welcome.module').then(m=>m.WelcomeModule)
  },
  {
    path: 'peticiones',
    loadChildren: () =>import('./peticioneshttp/peticioneshttp.module').then(m=>m.PeticioneshttpModule)
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
