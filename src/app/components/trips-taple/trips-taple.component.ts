import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { TripsService } from '../../services/trips/trips.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { SpinnerComponent } from "../spinner/spinner.component";
@Component({
    selector: 'app-trips-taple',
    standalone: true,
    providers: [TripsService],
    templateUrl: './trips-taple.component.html',
    styleUrl: './trips-taple.component.css',
    imports: [TableModule, ButtonModule, RatingModule, FormsModule, CommonModule, HttpClientModule, DeleteButtonComponent, SpinnerComponent]
})
export class TripsTapleComponent {

  constructor(private readonly trips:TripsService){}
  tripsData:any
  ngOnInit(){
      this.trips.getTrips().subscribe({
        next: (data:any) => {
          this.tripsData = data.data.sort((a:any,b:any)=>b.bookingUsers-a.bookingUsers);
        },
        error: (err) => {
          console.error(err);
        }
      })
  }


    first = 0;

    rows = 10;

    reloadData(){
      this.trips.getTrips().subscribe({
        next: (data:any) => {
          this.tripsData = data.data.sort((a:any,b:any)=>b.bookingUsers-a.bookingUsers);
        },
        error: (err) => {
          console.error(err);
        }
      })
    }

    next() {
        this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    pageChange(event:any) {
        this.first = event.first;
        this.rows = event.rows;
    }

    isLastPage(): boolean {
        return this.tripsData ? this.first === this.tripsData.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.tripsData ? this.first === 0 : true;
    }
}
