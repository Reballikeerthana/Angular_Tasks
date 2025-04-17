import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'; 
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet,Routes} from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [   
  { path: 'sign-in', component: SignInComponent },   
  { path: 'sign-up', component: SignUpComponent },   
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' } ]; 
  
@NgModule({  
   declarations: [     
    SignInComponent,     
    SignUpComponent  ],  
    imports: [
      MatSnackBarModule ,   
      MatInputModule,     
      MatButtonModule,     
      MatCardModule,     
      MatFormFieldModule,     
      ReactiveFormsModule,
      AppRoutingModule,
      RouterModule.forRoot(routes),
      ],  
      exports: [RouterModule], 
      providers: [], 
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      
    }) 
    export class AppModule { }