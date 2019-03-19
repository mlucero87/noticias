import { DataLocalService } from './../../sercices/data-local.service';
import { Article } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia:Article;
  @Input() indice:number;
  @Input() enFavoritos;

  constructor(private iab:InAppBrowser,
              private actionSheetController: ActionSheetController,
              private socialSharing:SocialSharing,
              private dl : DataLocalService) { }

  ngOnInit() {}

  abrirNoticia(){
    console.log(this.noticia.url);
    const browser = this.iab.create(this.noticia.url,'_system');

  }

 async lanzarMenu(){
  let btn;
  if(this.enFavoritos)
  {
    btn =  {
      text: 'Borrar de Favoritos',
      icon: 'trash',
      cssClass:'action-dark',
      handler: () => {
        this.dl.borrarNoticias(this.noticia);
      }
    }
  }
  else
  {
    btn =  {
      text: 'Favorito',
      icon: 'star',
      cssClass:'action-dark',
      handler: () => {
        this.dl.guardarNoticias(this.noticia);
      }
    }
  }
    const actionSheet = await this.actionSheetController.create({
      buttons: [ {
        text: 'Compartir',
        icon: 'share',
        cssClass:'action-dark',
        handler: () => {
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
          console.log('Share clicked');
        }
      }, btn
      , {
        text: 'Cancel',
        icon: 'close',
        cssClass:'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
