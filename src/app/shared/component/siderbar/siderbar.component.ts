import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shred-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.css']
})
export class SiderbarComponent {
 constructor(private gifsService:GifsService){}
 get tags():string[]{
  return this.gifsService.tagsHistory;
 }
 searchTag(tag:string):void{
  this.gifsService.searchTag(tag);
 }
}
