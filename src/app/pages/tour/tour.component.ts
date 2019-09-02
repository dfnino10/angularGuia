import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tour } from '../../models/tour.model';
import { TourService } from 'src/app/services/tour/tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tours: Tour[] = [];

  constructor(private tourService: TourService,
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

}
