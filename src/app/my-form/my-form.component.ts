import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {
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
  /* o plano era fazer uma tabela com os dados recebidos mas né*/
  onSubmit( registerForm ) {
       this.submitted = true;
    // meus dados recebidos estão no console
       console.log(this.registerForm.value);
    // quase um refresh
       this.ngOnInit();
      }
}

