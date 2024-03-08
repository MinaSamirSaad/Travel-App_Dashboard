import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "../spinner/spinner.component";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { AdminService } from '../../services/admin/admin.service';
import { SetAdminButtonComponent } from '../setAdminButton/set-admin-button/set-admin-button.component';
@Component({
    selector: 'app-users-taple',
    standalone: true,
    templateUrl: './users-taple.component.html',
    styleUrl: './users-taple.component.css',
    imports: [TableModule, ButtonModule, RatingModule, FormsModule, CommonModule, SpinnerComponent, DeleteButtonComponent, SetAdminButtonComponent]
})
export class UsersTapleComponent {
  constructor(private admin:AdminService){}
  userId = JSON.parse(localStorage.getItem('user') as string)._id;
  usersData:any
  ngOnInit(){
      this.admin.allUsers().subscribe({
        next: (data:any) => {
          console.log(data.data)
          this.usersData = data.data;
        },
        error: (err) => {
          console.error(err);
        }
      })
  }
  reloadData(){
    this.admin.allUsers().subscribe({
      next: (data:any) => {
        this.usersData = data.data;
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
        return this.usersData ? this.first === this.usersData.length - this.rows : true;
    }

    isFirstPage(): boolean {
        return this.usersData ? this.first === 0 : true;
    }
}
