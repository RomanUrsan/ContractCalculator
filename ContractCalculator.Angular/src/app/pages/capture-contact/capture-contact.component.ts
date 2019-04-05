import { Component } from '@angular/core';
import { ChoiceService, PageService } from '@services';
import { WizardPageBase } from '../../utils/wizard-page-base';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactChoices } from 'app/models/contact-choices.model';

@Component({
  selector: 'app-capture-contact',
  templateUrl: './capture-contact.component.html',
  styleUrls: ['./capture-contact.component.scss']
})

export class CaptureContactComponent extends WizardPageBase {
  contactForm = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    toSubscribe: new FormControl(),
  });

  constructor(
    private choiceService: ChoiceService,
    pageService: PageService) {
      super(pageService);
  }

  onSubmit(shouldEmailSavings: boolean): void {
    if (this.contactForm.controls.email.value == null && shouldEmailSavings) {
      this.contactForm.controls.email.setErrors({incorrect: true});
    }
    if (this.contactForm.invalid) {
      return;
    }
    const contact = new ContactChoices();

    contact.email = this.contactForm.controls.email.value;
    contact.toSubscribe = this.contactForm.controls.toSubscribe.value;
    contact.shouldEmailSavings = shouldEmailSavings;

    this.choiceService.Contact = contact;
    this.nextPage();
  }
}
