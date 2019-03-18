import { NoticiasService } from './../../sercices/noticias.service';
import { Article } from './../../interfaces/interfaces';
import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  @ViewChild(IonSegment) segment:IonSegment;
  categorias = ['business' ,'entertainment' ,'general' ,'health', 'science' ,'sports', 'technology'];
  noticias : Article[] = [];
  constructor(private noticiasService:NoticiasService){

  }

  ngOnInit() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  cambioCategoria(e){
    this.noticias = [];
    this.cargarNoticias(e.detail.value);
  }

  cargarNoticias(categoria:string,event?){
    this.noticiasService.getTopHeadLinesCategoria(categoria)
    .subscribe(resp=>{
      if(event){
        event.target.complete();
      }
      this.noticias.push(...resp.articles);
    });
  }

  loadData(event){
    this.cargarNoticias(this.segment.value,event);
  }
}

