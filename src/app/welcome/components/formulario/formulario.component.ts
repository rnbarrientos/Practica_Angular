import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  email: string='';
  nombre:string='';
  apellido:string='';

  mensajeRespuesta: string='';

  onSubmit(){
    console.log(this.email, this.nombre, this.apellido);
    // this.registrarContacto.registrarContacto(this.email,  this.nombre ).subscribe((response :any ) => {
    //   console.log(response);
    // this.mensajeRespuesta=response.message;
    // })

    this.mensajeRespuesta='Se creo el contacto';

  }
}

