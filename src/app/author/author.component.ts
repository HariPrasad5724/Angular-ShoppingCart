import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../authors.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title="3 Authors"
   author;
  constructor(service:AuthorService) {
     this.author=service.getAuthors();
  }

  ngOnInit(): void {
  }

}
