import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
 artistas:any[]=[];
 urlBusqueda:string="https://api.spotify.com/v1/search";

  constructor(private http:HttpClient) { }

  getArtistas(termino:string){
    let query= `q=${termino}&type=artist`;
    let url=this.urlBusqueda+query;

    return this.http.get(url)
    .map(res=>{
      console.log(res);
      
    })
  }


}
