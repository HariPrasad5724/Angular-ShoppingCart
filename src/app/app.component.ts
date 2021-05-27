import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  task={
    title:'Review',
    assignee:{
      name:'Hari Prasadh'
    }
  }

  title="Hello World"
  courses:any;
  viewMode='map';
  post={
    isFavorite:false
  }
  tweet={
    body:'...',
    likesCount:0,
    isLiked:false
  }
  onAdd(){
    this.courses.push({id:4,name:'Flask'});
  }
  onRemove(course:any){
    let index=this.courses.indexOf(course);
    this.courses.splice(index,1);
  }

  loadCourses(){
    this.courses=[
    {id:1,name:"React"},
    {id:2,name:"Angular"},
    {id:3,name:"Vue"},
    {id:4,name:"Django"}
  ];
  }

  trackCourse(course:any){
    return course?course.id:undefined;
  }
}
