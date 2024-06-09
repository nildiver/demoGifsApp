
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse,Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifsList:Gif[]=[];

  private _tagsHistory:string[]=[];
  private apikey:string ='Oo1OE2cE6kYk8ZCuRqKtLr31sUtA0ETK';
  private serviceUrl:string = 'https://api.giphy.com/v1/gifs';


  constructor(private http:HttpClient) { }

get tagsHistory(){
return[...this._tagsHistory] ;
}
private organizateHistory(tag:string){
  tag=tag.toLowerCase();
  this._tagsHistory.unshift(tag);
  this._tagsHistory=this._tagsHistory.splice(0,10); // delimitar la busqueda a 10

  if (this._tagsHistory.includes(tag)) {
   this._tagsHistory=this._tagsHistory.filter((oldtag) => oldtag != tag)
  }

}

searchTag(tag:string):void{
  if (tag.length === 0)return;
  this.organizateHistory(tag);
  this._tagsHistory.unshift(tag);

  const params= new HttpParams()
  .set('api_key',this.apikey)
  .set('limit',10)
  .set('q',tag)

  this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
 .subscribe(resp =>{
 this.gifsList=resp.data;
 console.log({gifs:this.gifsList})
 })
}

}
