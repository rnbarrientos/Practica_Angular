import { Component,Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() pages:any=[]

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(snippet: string) {
    return this.sanitizer.bypassSecurityTrustHtml(this.sanitizeSnippet(snippet));
  }

sanitizeSnippet(snippet: string): string {
  // Utiliza una expresión regular para eliminar las etiquetas span y sus atributos
  return snippet.replace(/<span class="[^"]*">|<\/span>/g, '');
}


 

}
