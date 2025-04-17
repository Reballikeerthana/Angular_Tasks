import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
@Component({   
  selector: 'app-sign-in',   
  templateUrl: './sign-in.component.html',   
  styleUrls: ['./sign-in.component.css'] 
})
export class SignInComponent implements OnInit 
{   
  signInForm!: FormGroup;   
  constructor(private fb: FormBuilder) { }  
   ngOnInit(): void 
   {    
     this.signInForm = this.fb.group({       
      email: ['', [Validators.required, Validators.email]],      
       password: ['', [Validators.required]]     });  
    }   
      onSignIn(): void {     
        if (this.signInForm.valid) 
          { console.log('Sign In', this.signInForm.value); } 
      } 
}