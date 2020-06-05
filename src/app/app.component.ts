import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { environment } from 'src/environments/environment';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  mapa: mapboxgl.map;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  ngOnInit(){
    mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new mapboxgl.Map({
    container: 'mapabox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.117, 25.4167], // starting position
    zoom: 9 // starting zoom
    });
  }
}
