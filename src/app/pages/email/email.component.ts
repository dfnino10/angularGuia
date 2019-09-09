import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { EmailService } from 'src/app/services/service.index';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  form: FormGroup;

  constructor(
    private emailService: EmailService,
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
    //this.emailService.sendNewMessage(form.value.name, form.value.email, form.value.message);
    this.dialogRef.afterClosed().subscribe(result =>  this.emailService.sendNewMessage(form.value.name, form.value.email, form.value.message));
    this.dialogRef.close();
  }

}
