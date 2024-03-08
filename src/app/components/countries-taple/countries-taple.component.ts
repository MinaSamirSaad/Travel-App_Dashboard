import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { CountriesService } from '../../services/countries/countries.service';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
    selector: 'app-countries-taple',
    standalone: true,
    templateUrl: './countries-taple.component.html',
    styleUrl: './countries-taple.component.css',
    imports: [TableModule, ButtonModule, RatingModule, FormsModule, CommonModule, HttpClientModule, DeleteButtonComponent, SpinnerComponent]
})
export class CountriesTapleComponent {
  constructor(private countries:CountriesService){}
  countriesData:any
  ngOnInit(){
      this.countries.getCountries().subscribe({
        next: (data:any) => {
          console.log(data.data)
          this.countriesData = data.data;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
  reloadData(){
    this.countries.getCountries().subscribe({
      next: (data:any) => {
        this.countriesData = data.data;
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
        return this.countriesData ? this.first === this.countriesData.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.countriesData ? this.first === 0 : true;
    }
}
