import { AuthorService } from './authors.service';
import { AuthorsComponent } from './authors.component';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
