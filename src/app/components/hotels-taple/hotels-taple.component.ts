import { Component } from '@angular/core';
import { HotelsService } from '../../services/hotels/hotels.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
    selector: 'app-hotels-taple',
    standalone: true,
    templateUrl: './hotels-taple.component.html',
    styleUrl: './hotels-taple.component.css',
    providers: [HotelsService],
    imports: [TableModule, ButtonModule, RatingModule, FormsModule, CommonModule, HttpClientModule, DeleteButtonComponent, SpinnerComponent]
})
export class HotelsTapleComponent {
  constructor(private hotels:HotelsService){}
  hotelsData:any
  ngOnInit(){
      this.hotels.getHotels().subscribe({
        next: (data:any) => {
          this.hotelsData = data.data.sort((a:any,b:any) => b.hotelRate - a.hotelRate);;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
  reloadData(){
    this.hotels.getHotels().subscribe({
      next: (data:any) => {
        this.hotelsData = data.data.sort((a:any,b:any) => b.hotelRate - a.hotelRate);;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

    first = 0;

    rows = 10;


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
        return this.hotelsData ? this.first === this.hotelsData.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.hotelsData ? this.first === 0 : true;
    }
}
