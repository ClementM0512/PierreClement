import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatListService {

  constructor() { }

  posts:any;
  idPost:any

  res:any;
  getPost(tab, id){
    for(let key in tab){
      if (tab[key]['id'] == id) {
        this.res = tab[key];
      }
    }
    return this.res;
  }  

  setPosts(posts){
    this.posts = posts;
  }

  setIdPost(id){
    this.idPost = id;
  }

  getPosts(){
    return this.posts;
  }

  getIdPost(){
    return this.idPost;
  }

}
