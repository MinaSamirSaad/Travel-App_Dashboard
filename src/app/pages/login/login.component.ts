import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin/admin.service';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { SpinnerComponent } from '../../components/spinner/spinner.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, ToastModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AdminService, MessageService]
})
export class LoginComponent {
  constructor(private admin:AdminService, private router: Router, myActivate:ActivatedRoute, private messageService: MessageService){}
  ngOnInit(){
    if(localStorage.getItem('token')){
      this.router.navigate(['home']);
    }
  }
  myForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[ Validators.required,Validators.minLength(4)])
  })
  get emailValid(){
    return this.myForm.controls["email"].value && this.myForm.controls["email"].invalid;
  }
  get passwordValid(){
    return this.myForm.controls["password"].value && this.myForm.controls["password"].invalid;
  }
  loading = false;

  onSubmit(){
    if(this.myForm.valid){
      this.loading = true;
        this.admin.login({
      email: this.myForm.value.email || '',
      password: this.myForm.value.password || ''
      }).subscribe({
          next:(data:any)=>{
            localStorage.setItem('token', data.data.token);
            localStorage.setItem('user', JSON.stringify(data.data.user));
            this.messageService.add({ severity: 'success', summary: 'Success Login', detail: `welcome ${data.data.user.userName}` });
            setTimeout(()=>this.router.navigate(['home']),2000)
          },
          error:(err)=>{
            console.log(err)
            this.loading = false;
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'something went wrong' });
          }
        })
      }
    }
  }
