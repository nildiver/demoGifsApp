import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
 public tagInput!:ElementRef<HTMLInputElement>;

 constructor(private gifsService:GifsService){}
//  searchTag(newtag:string){
//   console.log(newtag);
//  }
searchTag(){
  const newTag =this.tagInput.nativeElement.value;
  this.gifsService.searchTag(newTag);
  this.tagInput.nativeElement.value=''; // para limpiar la caja de texto
}
}
