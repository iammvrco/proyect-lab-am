import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router : Router ) {}
  
  go_selectProduct() {
    
    this.router.navigate( ['/select-product'] );

  }

  images = [
    {
      image:"assets/images-home/1.png"
    },
    {
      image:"assets/images-home/2.png"
    },
    {
      image:"assets/images-home/3.png"
    },
  ];

}
