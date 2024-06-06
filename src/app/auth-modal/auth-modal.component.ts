import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.loginForm = this.fb.group({
      email: ['',
        [Validators.required, Validators.email]
      ],
      password: ['',
        [Validators.required, Validators.minLength(6)]],
     });

     this.registerForm = this.fb.group({
      nome: ['',Validators.required],

        sobrenome: ['',Validators.required],

        celular: ['', Validators.required],

        email: ['',[Validators.required, Validators.email]],

          password: ['', [Validators.required, Validators.minLength(6)]],
     });
    }

  onLogin(): void {
     if(this.loginForm.valid){
      this.authService.login(this.loginForm.value).subscribe(Response =>{

      }, error =>{

      });

     }
  }

  onRegister(): void {
    if (this.registerForm.valid){

      this.authService.register(this.registerForm.value).subscribe(Response =>{

      }, eror =>{

      })
    }
  }
}
