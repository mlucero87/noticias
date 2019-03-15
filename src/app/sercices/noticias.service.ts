import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RespuestaTopHeadLines} from '../interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  getTopHeadLines(){
   return this.http.get<RespuestaTopHeadLines>(`https://newsapi.org/v2/top-headlines?country=ar&category=business&apiKey=58ca293b182b40a7af489a263ec21dea`)

  }
}
