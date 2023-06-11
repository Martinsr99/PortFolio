import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  public contactForm: FormGroup;
  public name: string;
  public email: string;
  public body: string;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: [this.name, Validators.required],
      email: [this.email, [Validators.required, Validators.email]],
      body: [this.body, Validators.required],
    });
  }

  onSubmit(contactForm) {
    const nameControl = this.contactForm.get('name');
    const emailControl = this.contactForm.get('email');
    const bodyControl = this.contactForm.get('body');
    if (nameControl.invalid) {
      Swal.fire('Error','Name is invalid','error')
    }
    if (emailControl.invalid) {
      Swal.fire('Error','Email is invalid','error')
    }
    if (bodyControl.invalid) {
      Swal.fire('Error','Body is invalid','error')
    }
    this.contactService.SendEmail(contactForm).subscribe((resp) => {
      console.log(resp);
    });
  }
}
