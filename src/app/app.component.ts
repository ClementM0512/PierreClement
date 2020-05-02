import { Component, Output } from '@angular/core';
import { WebServiceService } from './web-service.service';
import { FormatListService } from './format-list.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PierreClement';
  display="block";
  dsp="inline-flex";
  bool=0;

  posts:any[];
  idPost:any;
  @Output() res:any;

  constructor(private webServiceService:WebServiceService, private FormatListService:FormatListService){}

  ExecuteWS(){
    this.webServiceService.GetPosts().subscribe(data => {
      this.posts = Object.values(data);
      this.FormatListService.setPosts(this.posts);
    });
  }

  setId(id){
    this.FormatListService.setIdPost(id);
    this.bool=1;
  }

  
}
