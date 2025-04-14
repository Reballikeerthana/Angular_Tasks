import { CommonModule, NgIf } from '@angular/common';
import { Component, NgModule, NgModuleDecorator } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
isSignIn = true;
authForm: FormGroup;

constructor(private fb: FormBuilder)
{
  this.authForm = this.fb.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })
}

toggleForm()
{
  this.isSignIn = !this.isSignIn;
  this.authForm.reset();
}

onSubmit()
{
  if(this.authForm.valid)
  {
    const formValue = this.authForm.value;
    console.log(this.isSignIn? 'Sign In': 'Sign Up', formValue);
  }
}
} 
