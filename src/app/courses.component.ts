import { CoursesService } from './courses.service';
import { Component } from "@angular/core";

@Component({
  selector:'courses',
  template:`
        <h2>{{title}}</h2>
        <ul>
        <li *ngFor="let course of courses">
          {{course}}
        </li>
        <div (click)="onDiv()">
        <button (click)="onSave($event)" class="btn btn-primary" [class.active]="isActive">Go</button>
        </div>
        </ul>`
})
export class CoursesComponent{
  title="List of Courses";
  courses;
  isActive=false;

  constructor(service:CoursesService){
    this.courses=service.getCourses();
  }

  onSave($event: any){
    $event.stopPropagation();
    console.log("Button clicked!",$event);
  }

  onDiv(){
    console.log("Div clicked");
  }

  getTitle(){
    return this.title;
  }
}
