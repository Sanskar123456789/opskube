import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from '../../services/apis.service';
import { user } from '../../models/user';
import { Router } from '@angular/router';
@Component({
  selector: 'opskube-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forms!: FormGroup;
  userName ='';
  newUser = false;
  
  constructor(private formbuilder:FormBuilder,private service:ApisService,private router:Router) { }

  ngOnInit(): void {
    this._formInit();
  }
  private _formInit(){
    this.forms = this.formbuilder.group({
      Name:['', Validators.required],
      Phone_no:['',Validators.required],
      Address:['',Validators.required],
    })
  }

  login(){
    console.log(this.userName);
    this.service.login({Name:this.userName}).subscribe(data=>{
      console.log(data);
      if(data.success){
        localStorage.setItem('userName',data.User[0]._id);
        this.router.navigate(['']);
      }else{
        alert('No User Found');
      }
    })
  }
  tonewUser(){
    this.newUser = !this.newUser;
  }
  submit(){
    const data : user = {
      Name : this.forms.controls['Name'].value,
      Phone_no : this.forms.controls['Phone_no'].value,
      Address : this.forms.controls['Address'].value
    }

    this.service.newUser(data).subscribe(resdata=>{
      if(resdata){
        alert('User is created');
        this.tonewUser();
        this.userName = this.forms.controls['Name'].value
      }else{
        alert("Something went wrong!");
      }
    })
  }
  
}
