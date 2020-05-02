import { Component  } from '@angular/core';
import { FormatListService } from '../format-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private FormatListService:FormatListService) { }
  post:any;

  recupPost(){
    this.post = this.FormatListService.getPost(this.FormatListService.getPosts(),this.FormatListService.getIdPost());
    // console.log(this.post);
  }
}
