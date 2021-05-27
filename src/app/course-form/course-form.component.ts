import { Component } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  courseCategories=[
    {id:1,name:'Web Development'},
    {id:2,name:'Mobile App Development'},
    {id:3,name:'Blockchain Development'}
  ]
  log(x:any){
    console.log(x);
  }

  submit(f:any){
    console.log(f);
  }
}
