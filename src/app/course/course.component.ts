import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input('isFavorite')  isFavorite:boolean=true;
  @Output() change=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isFavorite=!this.isFavorite;
    this.change.emit();
  }
}
