import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router : Router ) {}

  b;
  sound=new Audio();
  
  options={
    loop:true
  }

  lugar = [
    "assets/images-home/1.png",
    "assets/images-home/2.png",
    "assets/images-home/3.png"
  ];

  procesos = [
    {
      nombre:"Selección de semillas",
      imagen:"./assets/procesos/1.jpg",
    },
    {
      nombre:"Preparación de terreno",
      imagen:"./assets/procesos/2.jpg",
    },
    {
      nombre:"Deposito de semillas",
      imagen:"./assets/procesos/3.jpg",
    },
    {
      nombre:"Cubrir las semillas",
      imagen:"./assets/procesos/4.jpg",
    },
    {
      nombre:"Regado de cosecha",
      imagen:"./assets/procesos/5.jpg",
    },
    {
      nombre:"Control de temperatura",
      imagen:"./assets/procesos/6.jpg",
    },
    {
      nombre:"Recolección de cosecha",
      imagen:"./assets/procesos/7.jpg",
    },
    {
      nombre:"Limpieza y secado",
      imagen:"./assets/procesos/8.jpg",
    },
    {
      nombre:"Almacenamiento",
      imagen:"./assets/procesos/9.jpg",
    },
  ];

  ngOnInit(){
    this.b=0;
  }

  audioPlay(){
    this.sound.src="./assets/presentacion.mp4";
    if(this.b==0){
      this.sound.load();
      this.sound.play();
      this.b=1;
    }
    else{
      this.sound.pause();
      this.b=0;
    }
  }

  ionViewWillLeave(){
    this.sound.pause();
  }

}
