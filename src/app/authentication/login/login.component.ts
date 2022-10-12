import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup = new FormGroup({
    email: new FormControl('abc@gmail.com', Validators.required),
    password: new FormControl('', Validators.required)
  })
  constructor(private router: Router) { }

  ngOnInit(): void {    
  }
  loginUser(){

    if(!this.userForm.valid){
      console.log('Form is invalid...');
      return;
    } 
    
    console.log(this.userForm.value);
    localStorage.setItem("email", this.userForm.value.email);
    localStorage.setItem("password", this.userForm.value.password);

    // this.router.navigateByUrl('/home');

    this.router.navigate(['/home']);

    // if(this.userForm.valid){
    //   console.log(this.userForm.value);
    // }else if(){

    // }else if(){

    // }else{

    // }
    //common logic
  }
}
