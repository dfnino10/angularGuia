import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EmailComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: '',
      email: '',
      message: ''
    });
    //this.dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  submit(form: FormGroup) {

    console.log(form.value.message);
    this.dialogRef.close();
  }

}
