import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  @Input('isFavorite')  isFavorite:boolean=true;
  onClick(){
    this.isFavorite=!this.isFavorite;
    console.log("Star clicked");
  }
}
