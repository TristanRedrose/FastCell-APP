import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noWhitespaceValidator } from '../../validators/noWhitespace.validator';
import { PopupService } from '../../services/popup/popup.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  constructor(private popupService: PopupService) {

  }

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50), noWhitespaceValidator(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50),noWhitespaceValidator(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(500), noWhitespaceValidator(10)]),
    consent: new FormControl(false, Validators.requiredTrue),
  })

  onSubmit():void {
    if (!this.consent.value) {
      return
    }

    let contactFormInfo = {
      firstName: this.firstName.value!.trim(),
      lastName: this.lastName.value!.trim(),
      email: this.email.value!.trim(),
      message: this.message.value!.trim(),
    }

    console.log(contactFormInfo);
    this.popupService.openPopup();
    this.contactForm.reset();
  }

  get firstName(): FormControl<string | null> {
    return this.contactForm.controls.firstName;
  }

  get lastName(): FormControl<string | null> {
    return this.contactForm.controls.lastName;
  }

  get email(): FormControl<string | null> {
    return this.contactForm.controls.email;
  }

  get message(): FormControl<string | null> {
    return this.contactForm.controls.message;
  }

  get consent(): FormControl<boolean | null> {
    return this.contactForm.controls.consent;
  }
}
