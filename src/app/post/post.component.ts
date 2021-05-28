import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{
  posts:any;
  constructor(private service:PostService) {
  }
  ngOnInit(){
    this.service.getPosts()
    .subscribe(response => {
      this.posts=(response);
      console.log(response);
    },error=>{
      alert('An unexpected error occurred!');
    })
  }

  getData(){
    return this.posts;
  }

  createPost(input:HTMLInputElement){
    let post:any={title:input.value};
    input.value=' ';
    this.service.addPosts(post)
    .subscribe(response=>{
      post['id']=response;
      this.posts.splice(0,0,post);
      console.log(this.posts)
    },error=>{
      alert('An unexpected error occurred while inserting!');
    });
  }

  updatePost(post:any){
    this.service.updatePosts(post)
    .subscribe(response=>{
      console.log(this.posts);
    },error=>{
      alert('An unexpected error occurred while updating!');
    })
  }

  deletePost(post:any){
    this.service.deletePosts(post).subscribe(response=>{
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    },error=>{
      alert('An unexpected error occurred while deleting!');
    })
  }
}
