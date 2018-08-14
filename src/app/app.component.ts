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
  submitted: false;

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
    senha: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

     onSubmit() {
        //this.submitted = true; //não aceita argh  
       // stop here if form is invalid
         if (this.registerForm.invalid) {
             return;
         }
         alert('SUCCESS!! :-)');
  }
}
