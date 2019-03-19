import { Article } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias:Article[] = [];

  constructor(private storage: Storage,public toastController: ToastController) {

    this.cargarFavoritos();

   }

   async presentToast(message:string) {
    const toast = await this.toastController.create({
      message,
      position:'middle',
      duration: 2000
    });
    toast.present();
  }

  guardarNoticias(noticia:Article){
    const existe = this.noticias.find(not => not.title === noticia.title);

    if(!existe)
    {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos',this.noticias);
    }
    this.presentToast('Agregado a Favoritos');
  }

  async cargarFavoritos(){
    const favoritos =  await this.storage.get('favoritos');
    if(favoritos)
    {
      this.noticias = favoritos;
    }
  }

  borrarNoticias(noticia:Article){
    this.noticias = this.noticias.filter(not => not.title !== noticia.title);
    this.storage.set('favoritos',this.noticias);
    this.presentToast('Borrado de Favoritos');
  }
}
