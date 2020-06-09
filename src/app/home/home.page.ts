import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router : Router ) {}

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

  descripciones = [
    "1.-ELECCION DE SEMILLAS Poner las semillas dentro de un vaso con agua y removemos. Las que se hundan son las buenas y las que floten seguramente no sean viables para sembrar.Pero aún hundiéndose, podrían no germinar si se han conservado mal, son muy viejas o han sido sobrecalentadas, por ejemplo.",
    "2.-PREPARACION DEL TERRENO En el primer caso lo que realizamos es retirar las malezas, piedras y palos que pudiera haber en la tierra y la cavar con una azada. Aportamos un poco de abono para semilleros al suelo. Romper los terrones y pasar un rastrillo o cultivador para hacer la tierra más fina y esponjosa. Si la tierra está muy seca, la regar hasta que se humedezca bien tanto en superficie como a unos centímetros de profundidad.",
    "3.-DEPOSITO DE SEMILLAS Lo realizamos en pequeños hoyos, surcos o distribuidas uniformemente por el terreno, esta egún sea el tamaño de la semilla y el tipo de planta será necesario uno de éstos tipos de siembra.",
    "4.-CUBRIR LAS SEMILLAS Cubrimos con una capa de tierra de aproximadamente dos veces el tamaño de la semilla. Es decir, una semilla de 2 mm basta con enterrarla 4 mm en el terreno. Cuanto mayor es la semilla, más se podrá enterrar.",
    "5.-REGADO Con una regadera de lluvia fina y mucho mejor si el agua que utilizamos no contiene cloro, Sobre todo si las semillas son muy pequeñas ya que regando entran mejor en contacto con la tierra; Para las semillas grandes no es necesario que la regemos siempre y cuando la tierra ya estuviera húmeda.",
    "6.-CONTROL DE TEMPERATURA Y HUMEDAD Si hace mucho sol y calor, tapamos con una malla de sombreo o similar, que deje pasar parcialmente la luz pero no de forma directa. Por el contrario, si hace demasiado frío para que las semillas germinen, cubrimos con un plástico transparente a modo de invernadero. Esparcir un poco de mantillo o turba negra sobre el suelo también ayudará a subir la temperatura de éste siempre y cuando haga sol. Una cama caliente es otro buen método para aumentar la temperatura del suelo.",
    "7.-RECOLECCION Recolectamos los productos de forma manual despues de que ah terminado su proceso de maduracion, la recoleccion mecánica no es posible. Para esto, a menudo se usa un machete o un cuchillo especializado.",
    "8.-LIMPIEZA Y SECADO Limpiamos de manera manual cuidando cada producto despues de esto, están listos para secarse. Este es otro paso crucial en la mejora del sabor",
    "9.-ALMACENAMIENTO Mantenemos el oxígeno fuera y aseguramos que los niveles de humedad sean consistentes utilizando bolsas GrainPro hermética de esta manera lo almacenamos hasta que el comprador pase a recogerlo."
  ];

}
