import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
// import { Printer, PrintOptions, PrinterOriginal } from '@ionic-native/printer';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';



// @Component({

@Injectable({
  providedIn: 'root'
})
export class MyserviceService { 
  tagId;
  pantalla = 1;

  myoptions;
  contenido;

  valores = { caratula: null, servicio: '', totalMostrar: '', total: 0, fecha: null };
  acumulado = [];
  usuario = { user: 'user', pass: 'pass' };


  constructor(
    private printer: Printer,
    public toastcontroller: ToastController,
    public loadingCtrl: LoadingController,
    private splashScreen: SplashScreen,
    private nfc: NFC,
    private ndef: Ndef,
    public platform: Platform,
    private toastCtrl: ToastController,
    private router: Router
  ) { }

  // addListenNFC() {
  //   this.nfc.addTagDiscoveredListener()
  //     .pipe(take(1))
  //     .subscribe(data => {
  //       if (data && data.tag && data.tag.id) {
  //         this.tagId = this.nfc.bytesToHexString(data.tag.id);
  //         if (this.tagId) {
  //           // alert( parseInt(this.tagId, 16));
  //           let myid = ('' + parseInt(this.tagId, 16)).slice(-6);
  //           let myid2 = parseInt(myid, 10);
  //           this.valores.caratula = parseInt(myid, 10);
  //           console.log('this.valores.caratula', this.valores.caratula);
  //           console.log('this.pantalla', this.pantalla);
  //           if (this.pantalla === 1) {
  //             this.router.navigateByUrl('/pagina2');
  //             this.pantalla = 2;
  //           }

  //           if (this.pantalla === 3) {
  //             this.Imprimir2();
  //           }


  //         } else {
  //           alert('Tarjeta no reconocida..');
  //           // alert('NFC_NOT_DETECTED');
  //         }
  //       }
  //     });
  // }

  // async toast_mostrar(message: string, duration: number, color?: string, position?: any) {
  //   const toast = await this.toastcontroller.create({
  //     message,
  //     animated: true,
  //     duration,
  //     color,
  //     position
  //   });
  //   toast.present();
  // }

  // limpiar() {
  //   this.valores.caratula = null;
  //   this.valores.servicio = "";
  //   this.valores.total = 0;
  //   this.valores.totalMostrar = "";
  // }


}
