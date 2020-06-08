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
      nombre:"Sandía"
    },
    {
      id:1,
      nombre:"Melón",
    },
    {
      id:2,
      nombre:"Naranja"
    }
  ];
  verduras=[
    {
      id:0,
      nombre:"Frijol"
    },
    {
      id:1,
      nombre:"Papa",
    },
    {
      id:2,
      nombre:"Maíz"
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
