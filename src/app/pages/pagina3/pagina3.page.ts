import { Component, OnInit } from '@angular/core';
import { Printer, PrintOptions } from '@ionic-native/printer/ngx';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';



@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(
    private printer: Printer,
    public toastcontroller: ToastController,
    public loadingCtrl: LoadingController,
    private splashScreen: SplashScreen,
    private nfc: NFC,
    private ndef: Ndef,
    public platform: Platform,
    private toastCtrl: ToastController,
    private router: Router,
    private mys: MyserviceService
     ) { }



  ngOnInit() {

  }





















}
