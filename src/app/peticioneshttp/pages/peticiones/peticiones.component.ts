import { Component } from '@angular/core';
import { WikipediaService } from '../../wikipedia.service';


@Component({
  selector: 'app-peticiones',
  templateUrl: './peticiones.component.html',
  styleUrls: ['./peticiones.component.css']
})
export class PeticionesComponent {
  pages:any=[]

  constructor (private wikipedia: WikipediaService){

  }
  onTerm(term: string){
    
    this.wikipedia.searc(term).subscribe((response: any) => {
      console.log(response);
      this.pages=response.query.search;
      console.log(this.pages);
    })
  }
 
}
