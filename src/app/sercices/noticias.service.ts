import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RespuestaTopHeadLines} from '../interfaces/interfaces'
import { environment } from 'src/environments/environment';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key':apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  
  topHeadlinesPage = 0;
  catagoriaPage = 0;
  categoriaActual = "";
  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>(query:string){

    query = apiUrl + query;

    return this.http.get<T>(query,{headers});
  }

  getTopHeadLines(){
    this.topHeadlinesPage++;
   return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&page=${this.topHeadlinesPage}`)

  }

  getTopHeadLinesCategoria(categoria:string){
    if(this.categoriaActual == categoria){
      this.catagoriaPage++;
    }
    else
    {
      this.catagoriaPage = 1;
      this.categoriaActual = categoria;
    }
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${categoria}&page=${this.catagoriaPage}`)
  }
}
