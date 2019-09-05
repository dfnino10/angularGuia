import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../../models/tour.model';
import { TourService } from 'src/app/services/tour/tour.service';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { EmailComponent } from '../email/email.component';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tours: Tour[] = [];
  count: number = 1;
  dialogEmail: MatDialogRef<EmailComponent>; 

  constructor(private tourService: TourService,
    private dialog: MatDialog,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getToursByGuideId();
  }

  getTours(): void {
    //TODO Consume REST Service
    this.tours = this.tourService.getAllTours();
  }

  getToursByGuideId(): void {
    const guideId = this.route.snapshot.paramMap.get('guiaId');
    this.tourService.getToursById(guideId).subscribe(tours => this.tours = tours);
  }

  myDialog() {
    this.count++; 
    console.log("kyc prro :v" + this.count);
    this.dialogEmail = this.dialog.open(EmailComponent, {
      height: '400px',
      width: '600px',
    }); 
    //this.dialog.open(EmailComponent, new MatDialogConfig());
  }


}
