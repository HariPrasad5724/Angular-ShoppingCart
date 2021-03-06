import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
  }

  addPosts(post:any){
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePosts(post:any){
    return this.http.patch(this.url+"/"+post.id,JSON.stringify({
      "title":"Hello Guys"
    }))
  }

  deletePosts(post:any){
    return this.http.delete(this.url+'/'+post.id)
  }
}
