import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment.prod';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  ngOnInit(){
    mapboxgl.accessToken = environment.mapboxkey;
    var mapa = new mapboxgl.Map({
    container: 'mapabox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-100.117, 25.4167], // starting position
    zoom: 12 // starting zoom
    });
  }

}
