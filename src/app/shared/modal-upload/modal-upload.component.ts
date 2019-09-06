import { Component, OnInit } from '@angular/core';
import { ModalUploadService } from './modal-upload.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {
  private image: ImageSelected = null;

  constructor(
    private _modalUploadService: ModalUploadService,
    private http: HttpClient) {
    console.log("cargo modal")
  }

  cerrarModal() {
    this._modalUploadService.ocultarModal();
  }

  ngOnInit() {
  }

  onUploadFinish(event) {
    console.log(event);
    this.image = new ImageSelected;
    this.image.image = event.src;
    this.image.name = event.file.name;
  }

  sendImage() {
    if (this.image != null) {
      console.log('send image');
      // this.http.post('https://127.0.0.1:8887', {
      this.http.post('http://eduardduarte.ddns.net:444/', {

        file: this.image.image,
        name: this.image.name
      }).subscribe((d) => {
        console.log(d);
      })
    }
  }
}

class ImageSelected {
  public name: String;
  public image: String;
}
