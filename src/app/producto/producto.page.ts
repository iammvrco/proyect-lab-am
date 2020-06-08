import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  frutas=[
    {
      nombre: "Sandía",
      carrusel: [
        "./assets/frutas/sandia/sandia1.jpg",
        "./assets/frutas/sandia/sandia2.jpg",
        "./assets/frutas/sandia/sandia3.jpg",
        "./assets/frutas/sandia/sandia4.jpg"
      ],
      audio: "./assets/frutas/sandia/sandia.mp4",
      descripcion: "Aquí en la granja, cultivamos las mejores sandías, bien jugosas y bien dulces, si no me cree nomás escuche. Así se escucha cuando la sandía está en su punto, lista para comerse."
    },
    {
      nombre: "Melón",
      carrusel: [
        "./assets/frutas/melon/melon1.jpg",
        "./assets/frutas/melon/melon2.jpg",
        "./assets/frutas/melon/melon3.jpg",
        "./assets/frutas/melon/melon4.jpg"
      ],
      audio: "./assets/frutas/melon/melon.mp4",
      descripcion: "Los melones que te cultivo aquí están bien sabrosos, apenas lo muerde uno y se les escurre todo el jugo, además de que están bien dulces, perfectos para hacer agua de melón."
    },
    {
      nombre: "Naranja",
      carrusel: [
        "./assets/frutas/naranja/naranja1.jpg",
        "./assets/frutas/naranja/naranja2.jpg",
        "./assets/frutas/naranja/naranja3.jpg",
        "./assets/frutas/naranja/naranja4.jpg"
      ],
      audio: "./assets/frutas/naranja/naranja.mp4",
      descripcion: "Las naranjas que tenemos son muy refrescantes, perfectas para ahorita que hace calor, tanto como en jugo de naranja como comiéndoselas así en gajos."
    }
  ];
  verduras=[
    {
      nombre: "Frijol",
      carrusel: [
        "./assets/verduras/frijol/frijol1.jpg",
        "./assets/verduras/frijol/frijol2.jpg",
        "./assets/verduras/frijol/frijol3.jpg",
        "./assets/verduras/frijol/frijol4.jpg"
      ],
      audio: "./assets/verduras/frijol/frijol.mp4",
      descripcion: "Los frijolitos, siempre necesarios en toda buena comida, por eso quí en mi granja cultivo unos frijoles bien sabrosos pa’ meterlos directito en la olla."
    },
    {
      nombre: "Papa",
      carrusel: [
        "./assets/verduras/papa/papa1.jpg",
        "./assets/verduras/papa/papa2.jpg",
        "./assets/verduras/papa/papa3.jpg",
        "./assets/verduras/papa/papa4.jpg"
      ],
      audio: "./assets/verduras/papa/papa.mp4",
      descripcion: "La papa que cultivamos aquí es muy nutritiva y también es buenísima para ponérsela a los calditos o comérsela asada con tantita mantequilla y sal."
    },
    {
      nombre: "Maíz",
      carrusel: [
        "./assets/verduras/maiz/maiz1.jpg",
        "./assets/verduras/maiz/maiz2.jpg",
        "./assets/verduras/maiz/maiz3.jpg",
        "./assets/verduras/maiz/maiz4.jpg"
      ],
      audio: "./assets/verduras/maiz/maiz.mp4",
      descripcion: "El maíz es bien importante para todo mexicano que se respete, lo comemos en las tortillitas, como harina o en la misma mazroca pues, por eso siempre lo cuido con extra de cariño."
    }
  ];

  options={
    loop:true
  }

  id;
  categoria;
  producto;
  b;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.categoria=this.activatedRoute.snapshot.paramMap.get('categoria');
    this.producto=(this.categoria==="frutas")?this.producto=this.frutas[this.id]:this.producto=this.verduras[this.id];
    this.b=0;
  } 

  sound=new Audio();

  audioPlay(){
    this.sound.src=this.producto.audio;
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
