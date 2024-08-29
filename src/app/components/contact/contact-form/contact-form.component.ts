import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noWhitespaceValidator } from '../../../validators/noWhitespace.validator';
import { PopupService } from '../../../services/popup/popup.service';
import { EmailService } from '../../../services/email/email.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {

  constructor(private popupService: PopupService, private emailService: EmailService) {

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

    this.contactForm.disable();

    let contactFormInfo = {
      firstName: this.firstName.value!.trim(),
      lastName: this.lastName.value!.trim(),
      email: this.email.value!.trim(),
      message: this.message.value!.trim(),
    }

    console.log(contactFormInfo);

    const subject = `Upit kontakt obrasca - Mobitronic service`;
    const html = `
    <h3>Šalje: ${contactFormInfo.firstName} ${contactFormInfo.lastName}</h3>
    <h3>Email: ${contactFormInfo.email}</h3>
    <p>${contactFormInfo.message}</p>
    `;

    this.emailService.sendEmail(subject, html).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
        this.popupService.openPopup('Poruka uspješno poslana.', false);
        this.contactForm.enable();
        this.contactForm.reset();
      },
      error: (error) => {
        console.error('Error sending mail:', error);
        this.popupService.openPopup('Greška prilikom slanja poruke', true);
        this.contactForm.enable();
      }
    });
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
