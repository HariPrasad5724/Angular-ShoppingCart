import { AuthorService } from './authors.service';
import { Component } from "@angular/core";

@Component({
  selector:'authors',
  template:`
        <h2>{{title}}</h2>
        <ul>
        <li *ngFor="let author of authors">
          {{author}}
        </li>
        </ul>`
})
export class AuthorsComponent{
   title="3 Authors"
   authors;

  constructor(service:AuthorService){
    this.authors=service.getAuthors();
  }
}
