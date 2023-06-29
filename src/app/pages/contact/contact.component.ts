import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/services/contact.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit,OnDestroy {
  public contactForm: FormGroup;
  public name: string;
  public email: string;
  public body: string;
  public sub: Subscription;

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

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  // Function to send the form
  onSubmit(contactForm:FormGroup) {

    const nameControl = this.contactForm.get('name');
    const emailControl = this.contactForm.get('email');
    const bodyControl = this.contactForm.get('body');

    //Check form valid and manage errors
    if (nameControl.invalid) {
      Swal.fire('Error','Name is invalid','error')
    }
    if (emailControl.invalid) {
      Swal.fire('Error','Email is invalid','error')
    }
    if (bodyControl.invalid) {
      Swal.fire('Error','Body is invalid','error')
    }
    if(this.contactForm.valid){
      this.sub = this.contactService.SendEmail(contactForm).subscribe((resp) => {
      });
    }
  }
}
