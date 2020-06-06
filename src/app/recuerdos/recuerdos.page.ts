import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-recuerdos',
  templateUrl: './recuerdos.page.html',
  styleUrls: ['./recuerdos.page.scss'],
})
export class RecuerdosPage implements OnInit {
  foto: any;
  constructor(private camera: Camera) { }

  hacerFoto(){
    const optiones: CameraOptions={
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(optiones).then((imageData)=>{
      this.foto= 'data:image/jpeg;base64,' + imageData;
    },(error)=>{
      console.log(error);
    });
  }
  ngOnInit() {
  }

}
