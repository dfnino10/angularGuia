import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  //carga la clase oculto al modal
  ocultar = '';

  constructor() {
    console.log("cargo modal")
  }

  ngOnInit() {
  }

}
