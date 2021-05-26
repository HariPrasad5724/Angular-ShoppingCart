import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Hello World"
//   post={title :'Hello Hari!',
//   isFavorite:true
// }
// onClick(){
//   console.log("Star clicked");
// }
  tweet={
    body:'...',
    likesCount:0,
    isLiked:false
  }
}
