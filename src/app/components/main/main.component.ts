import { Component } from '@angular/core';
import { PieComponent } from '../pie/pie.component';
import { ChartComboComponent } from '../chart-combo/chart-combo.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../spinner/spinner.component';
import { AdminService } from '../../services/admin/admin.service';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [PieComponent, ChartComboComponent, HttpClientModule, SpinnerComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  constructor(private readonly admin:AdminService){}
  lengths = null;
  ngOnInit(){
    this.admin.getAdminData().subscribe({
      next: (data:any) => {
        this.lengths = data.data;
      }
    })
  }
}
