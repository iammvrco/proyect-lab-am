import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.prod';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-conocenos',
  templateUrl: './conocenos.page.html',
  styleUrls: ['./conocenos.page.scss'],
})
export class ConocenosPage implements OnInit {

  informacion={
    nombre: '',
    descripcion:'',
    audio:'',
    marcador:[0,0]
  }
  mapa: mapboxgl.Map;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.informacion.nombre=this.activatedRoute.snapshot.paramMap.get('sembradio');
    if(this.informacion.nombre==="Los Morales"){
      this.informacion.descripcion="Aqui se venden frutas.";
      this.informacion.marcador=[-100.117, 25.4167];
    }
    else{
      this.informacion.descripcion="Aquí se venden verduras."
      this.informacion.marcador=[-100.117, 29.167];
    }
    mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new mapboxgl.Map({
    container: 'mapabox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: this.informacion.marcador, // starting position
    zoom: 12 // starting zoom
    });
    this.mapa.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserLocation:true
    }));
  }
}
