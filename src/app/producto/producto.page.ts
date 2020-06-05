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
      ],
      audio: "",
      descripcion: "waefwafewwafewfwfwfafwaef actitud ante todo fasdfsafsdfsdsdafdsadsa"
    },
    {
      nombre: "Melón",
      carrusel: [
      ],
      audio: "",
      descripcion: "efawefawfeawfeawfewawefewfweafewefdafdsafsdsfsdf"
    },
    {
      nombre: "Naranja",
      carrusel: [
      ],
      audio: "",
      descripcion: "dsadDDsdffdfdsewefaefwefwefwefewffsdafsafsdfsaf"
    }
  ];
  verduras=[
    {
      nombre: "Frijol",
      carrusel: [
      ],
      audio: "",
      descripcion: "waefwafewwafewfwfwfafwaef actitud ante todo fasdfsafsdfsdsdafdsadsa"
    },
    {
      nombre: "Papa",
      carrusel: [
      ],
      audio: "",
      descripcion: "efawefawfeawfeawfewawefewfweafewefdafdsafsdsfsdf"
    },
    {
      nombre: "Maíz",
      carrusel: [
      ],
      audio: "",
      descripcion: "dsadDDsdffdfdsewefaefwefwefwefewffsdafsafsdfsaf"
    }
  ];

  id;
  categoria;
  producto;

  constructor(private activatedRoute: ActivatedRoute) {
    
    
   }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.categoria=this.activatedRoute.snapshot.paramMap.get('categoria');
    this.producto=(this.categoria==="frutas")?this.producto=this.frutas[this.id]:this.producto=this.verduras[this.id];
  } 
}
