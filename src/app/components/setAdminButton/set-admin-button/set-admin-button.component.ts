import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { AdminService } from '../../../services/admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-set-admin-button',
  standalone: true,
  imports: [ConfirmDialogModule, ToastModule, ButtonModule, HttpClientModule],
  templateUrl: './set-admin-button.component.html',
  styleUrl: './set-admin-button.component.css',
  providers: [ConfirmationService, MessageService],
})
export class SetAdminButtonComponent {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private admin: AdminService) {}
  @Input() id: any = '';
  @Input() style: any;
  @Input() text:string = '';
  @Output() confirm = new EventEmitter<any>();
  confirm2(event: Event) {
      this.confirmationService.confirm({
          target: event.target as EventTarget,
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          acceptButtonStyleClass:"p-button-danger p-button-text",
          rejectButtonStyleClass:"p-button-text p-button-text",
          acceptIcon:"none",
          rejectIcon:"none",

          accept: () => {
            this.admin.setAdmin(this.id).subscribe({
              next: (data:any) => {
                this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'You have accepted' });
                this.confirm.emit(true);
              },
              error: (err) => {
                this.messageService.add({ severity: 'error', summary: 'Error', detail: 'there is Error' });
              }
            })
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
          }
      });
  }
}
