import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({   
  selector: 'app-sign-up',   
  templateUrl: './sign-up.component.html',   
  styleUrls: ['./sign-up.component.css'] 
})
  export class SignUpComponent implements OnInit 
  {   
    signUpForm!: FormGroup;  
    constructor(private fb: FormBuilder) { }   
    ngOnInit(): void 
    {    
       this.signUpForm = this.fb.group({       
        username: ['', [Validators.required]],       
        email: ['', [Validators.required, Validators.email]],       
        password: ['', [Validators.required]]     });  
    }   
    onSignUp(): void
      {     
        if (this.signUpForm.valid) 
        { 
          console.log('Sign Up', this.signUpForm.value);  
          
        }
      }
  }