import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      idade: ['', [Validators.required, Validators.maxLength(3)]],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      usuario: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }
  get nome() {
    return this.registerForm.get('nome');
  }
  get telefone() {
    return this.registerForm.get('telefone');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get idade() {
    return this.registerForm.get('idade');
  }
  get cidade() {
    return this.registerForm.get('cidade');
  }
  get estado() {
    return this.registerForm.get('estado');
  }
  get usuario() {
    return this.registerForm.get('usuario');
  }
  get senha() {
    return this.registerForm.get('senha');
  }

  /*o plano era fazer uma tabela com os dados recebidos mas né*/
  onSubmit() {
       this.submitted = true;
    // meus dados recebidos estão no console
       console.log(this.registerForm);
      }

}


