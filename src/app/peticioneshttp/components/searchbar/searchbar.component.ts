import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit{

  @Output()  submitted = new EventEmitter<string>();

  term='';

  ngOnInit(){}

    onInput(event: Event){
      this.term=(event.target as HTMLInputElement).value
    }

    onFormSubmit (event: Event){
      event.preventDefault()
      this.submitted.emit(this.term)
      console.log(this.term)
    }

}
