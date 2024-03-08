import { EventEmitter } from "@angular/core";
import { AdminService } from "../services/admin/admin.service";
import { MessageService } from "primeng/api";

export const deleteHandler=(type:string, id:any, confirm:EventEmitter<any>, admin: AdminService, messageService: MessageService)=>{
  switch(type){
    case 'trip':
      admin.deleteTrip(id).subscribe({
        next: (data:any) => {
          console.log(data)
          confirm.emit(true);
          messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        error: (err:any) => {
          console.error(err);
          messageService.add({ severity: 'error', summary: 'Rejected', detail: 'some thing wrong happen' });
        }
      })
      break;
    case 'hotel':
      admin.deleteHotel(id).subscribe({
        next: (data:any) => {
          console.log(data)
          confirm.emit(true);
          messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });

        },
        error: (err:any) => {
          console.error(err);
          messageService.add({ severity: 'error', summary: 'Rejected', detail: 'some thing wrong happen' });

        }
      })
      break;
    case 'country':
      admin.deleteCountry(id).subscribe({
        next: (data:any) => {
          console.log(data)
          confirm.emit(true);
          messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        error: (err:any) => {
          console.error(err);
          messageService.add({ severity: 'error', summary: 'Rejected', detail: 'some thing wrong happen' });
        }
      })
      break;
    case 'user':
      admin.deleteUser(id).subscribe({
        next: (data:any) => {
          console.log(data)
          confirm.emit(true);
          messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        },
        error: (err:any) => {
          console.error(err);
          messageService.add({ severity: 'error', summary: 'Rejected', detail: 'some thing wrong happen' });
        }
      })
      break;
  }
}
