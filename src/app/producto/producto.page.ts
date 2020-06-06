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
      audio: "",
      descripcion: "waefwafewwafewfwfwfafwaef actitud ante todo fasdfsafsdfsdsdafdsadsa"
    },
    {
      nombre: "Melón",
      carrusel: [
        "./assets/frutas/melon/melon1.jpg",
        "./assets/frutas/melon/melon2.jpg",
        "./assets/frutas/melon/melon3.jpg",
        "./assets/frutas/melon/melon4.jpg"
      ],
      audio: "",
      descripcion: "efawefawfeawfeawfewawefewfweafewefdafdsafsdsfsdf"
    },
    {
      nombre: "Naranja",
      carrusel: [
        "./assets/frutas/naranja/naranja1.jpg",
        "./assets/frutas/naranja/naranja2.jpg",
        "./assets/frutas/naranja/naranja3.jpg",
        "./assets/frutas/naranja/naranja4.jpg"
      ],
      audio: "", 
      descripcion: "dsadDDsdffdfdsewefaefwefwefwefewffsdafsafsdfsaf"
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
      audio: "",
      descripcion: "waefwafewwafewfwfwfafwaef actitud ante todo fasdfsafsdfsdsdafdsadsa"
    },
    {
      nombre: "Papa",
      carrusel: [
        "./assets/verduras/papa/papa1.jpg",
        "./assets/verduras/papa/papa2.jpg",
        "./assets/verduras/papa/papa3.jpg",
        "./assets/verduras/papa/papa4.jpg"
      ],
      audio: "",
      descripcion: "efawefawfeawfeawfewawefewfweafewefdafdsafsdsfsdf"
    },
    {
      nombre: "Maíz",
      carrusel: [
        "./assets/verduras/maiz/maiz1.jpg",
        "./assets/verduras/maiz/maiz2.jpg",
        "./assets/verduras/maiz/maiz3.jpg",
        "./assets/verduras/maiz/maiz4.jpg"
      ],
      audio: "",
      descripcion: "dsadDDsdffdfdsewefaefwefwefwefewffsdafsafsdfsaf"
    }
  ];

  options={
    loop:true
  }

  id;
  categoria;
  producto;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.categoria=this.activatedRoute.snapshot.paramMap.get('categoria');
    this.producto=(this.categoria==="frutas")?this.producto=this.frutas[this.id]:this.producto=this.verduras[this.id];
  } 
}
