import { Injectable } from '@angular/core';
import { Choices } from '@models';
import { ContactChoices } from 'app/models/contact-choices.model';

@Injectable({ providedIn: 'root' })

export class ChoiceService {
  userChoices = new Choices();

  set DataUsage(dataPackage: number) {
    this.userChoices.dataUsage = dataPackage;
  }

  set Contact(contact: ContactChoices) {
    this.userChoices.contact = contact;
  }
}
