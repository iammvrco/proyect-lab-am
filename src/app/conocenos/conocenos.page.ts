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
    dirr:'',
    tel:'',
    correo:'',
    marker:'',
    lon:0,
    lat:0
  }

  logo;

  mapa: mapboxgl.Map;
  marker;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.informacion.nombre=this.activatedRoute.snapshot.paramMap.get('sembradio');
    if(this.informacion.nombre==="Los Morales"){
      this.informacion.descripcion="El cultivo Los Morales utiliza técinas de regado avanzadas para garantizar que las frutas que cultivamos aquí estén bien jugosas, también cuidamos mucho el los nutrientes que les damos para obtener unas cosechas más dulces.";
      this.informacion.dirr="Montemorelos, N.L.";
      this.informacion.tel="8123431354";
      this.informacion.correo="GranjaMZ@gmail.com"
      this.informacion.marker='./assets/marker/icon-morales.png';
      this.informacion.lon=-100.035;
      this.informacion.lat=25.241;
      this.logo="./assets/logo/los-morales.png";
    }
    else{
      this.informacion.descripcion="El cultivo Los Zambrano está repartido por partes iguales asignando los cultivos de verduras a zonas en particulares debido a los cuidados epeciales que necesitan utilizando abono de la mejor calidad y un control de plagas natural.";
      this.informacion.dirr="Montemorelos, N.L.";
      this.informacion.tel="8123431354";
      this.informacion.correo="GranjaMZ@gmail.com";
      this.informacion.marker='./assets/marker/icon-zambrano.png',
      this.informacion.lon=-100.088;
      this.informacion.lat=25.220;
      this.logo="./assets/logo/los-zambrano.png";
    }
    mapboxgl.accessToken = environment.mapboxkey;
    this.mapa = new mapboxgl.Map({
    container: 'mapabox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [this.informacion.lon,this.informacion.lat], // starting position
    zoom: 7.5 // starting zoom
    }); 
    this.crearMarcador();
  }
  crearMarcador(){
    var el=document.createElement('img');
    el.src=this.informacion.marker;
    el.style.width='50px';
    el.style.height='50px';
    const marker=new mapboxgl.Marker(el).setLngLat([this.informacion.lon, this.informacion.lat]).addTo(this.mapa);
  }
}
