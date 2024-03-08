import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { AdminService } from '../../services/admin/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { deleteHandler } from '../../helperFunctions/functions';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [ConfirmDialogModule, ToastModule, ButtonModule, HttpClientModule],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.css',
  providers: [ConfirmationService, MessageService],
})
export class DeleteButtonComponent {
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private admin: AdminService) {}
  @Input() id: any = '';
  @Input() type: string = '';
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
            deleteHandler(this.type, this.id, this.confirm, this.admin, this.messageService);
          },
          reject: () => {
              this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
          }
      });
  }
}
