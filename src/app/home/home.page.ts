import { Component, OnInit } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

// import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MyserviceService } from '../service/myservice.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  esValido = false;
  isloading = false;
  loading: any;     //para almacenar funcionamiento de la funcion loading
  contenido = '';
  myoptions;

  pantalla = 1;

  tagId;
  scanned;

  valores = { caratula: null, servicio: '', totalMostrar: '', total: 0 };

  usuario = { user: null, pass: null };
  usuarioPermitido = { user: '1', pass: '1' };

  constructor(
    private printer: Printer,
    public toastcontroller: ToastController,
    public loadingCtrl: LoadingController,
    private splashScreen: SplashScreen,
    public platform: Platform,
    private toastCtrl: ToastController,
    private router: Router,
    private mys: MyserviceService,

  ) { }


  ngOnInit() {
    this.splashScreen.hide();
  } // fin ngOnInit


  ingresar() {
    // console.log(this.usuario)
    // console.log(this.usuarioPermitido)
    if (this.usuario.user != this.usuarioPermitido.user || this.usuario.pass != this.usuarioPermitido.pass) {
      this.toast_mostrar('Datos inválidos, intente nuevamente.', 3000, "primary", "middle");
    } else {
      this.toast_mostrar('Bienvenido..',  1000, "primary", "middle");
      this.router.navigateByUrl('/pagina2');
    }
  } 

  async toast_mostrar(message: string, duration: number, color?: string, position?: any) {
    const toast = await this.toastcontroller.create({
      message,
      animated: true,
      duration,
      color,
      position
    });
    toast.present();
  } 

}


