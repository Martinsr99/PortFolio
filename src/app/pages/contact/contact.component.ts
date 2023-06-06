import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public name: string
  public email: string
  public body: string


  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [this.name, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      body:[this.body, Validators.required],
    });
  }

  actualizarPerfil() {
    console.log('first')
  }

}
