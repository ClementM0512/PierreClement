import { Component } from '@angular/core';
import { WebServiceService } from './web-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PierreClement';
  display="block";

  test = "abcd";

  posts:any;

  constructor(private webServiceService:WebServiceService){}

  ngOnInit(){
  }

  ExecuteWS(){
    this.webServiceService.GetPosts().subscribe(data => {
      this.posts = data;
      this.posts.forEach(post => {
        console.log("Titre : " + post["title"]);   
      });         
    });
  }
}
