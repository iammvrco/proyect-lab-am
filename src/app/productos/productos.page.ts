import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  categoria;
  sembradio;
  opciones;
  logo;
  frutas=[
    {
      id:0,
      nombre:"Sandía",
      imagen:"./assets/frutas/sandia/sandia2.jpg",
      descripcion:"No solo vea la sandía, venga a pegarle pa' que se de cuenta de la calidad."
    },
    {
      id:1,
      nombre:"Melón",
      imagen:"./assets/frutas/melon/melon2.jpg",
      descripcion:"Lo que sabemos hacer aquí es cuidar bien a nuestros melones, echele un ojo."
    },
    {
      id:2,
      nombre:"Naranja",
      imagen:"./assets/frutas/naranja/naranja2.jpg",
      descripcion:"¿Cuáles naranjas de Montemorelos? Más bien naranjas de los Morales Zambrano."
    }
  ];
  verduras=[
    {
      id:0,
      nombre:"Frijol",
      imagen:"./assets/verduras/frijol/frijol2.jpg",
      descripcion:"Frijolitos frescos, recolectados todos los días para comer en ese ratito."
    },
    {
      id:1,
      nombre:"Papa",
      imagen:"./assets/verduras/papa/papa2.jpg",
      descripcion:"La papa está bien buena, agarre la que quiera. Calidad garantizadada.."
    },
    {
      id:2,
      nombre:"Maíz",
      imagen:"./assets/verduras/maiz/maiz2.jpg",
      descripcion:"Arranque una mazorca y metala a la braza pa' un elote asadito, bien fresco."
    }
  ];

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.categoria=this.activatedRoute.snapshot.paramMap.get('categoria');
    if(this.categoria==="frutas")
    {
      this.opciones=this.frutas;
      this.sembradio="Los Morales";
      this.logo="./assets/logo/los-morales.png";
    }
    else{
      this.opciones=this.verduras;
      this.sembradio="Zambrano";
      this.logo="./assets/logo/los-zambrano.png";
    }
  }
}
