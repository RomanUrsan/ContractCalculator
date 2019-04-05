import { Component } from '@angular/core';
import { WizardPageBase } from 'app/utils/wizard-page-base';
import { ChoiceService, PageService } from '@services';

@Component({
  selector: 'app-data-usage',
  templateUrl: './data-usage.component.html',
  styleUrls: ['./data-usage.component.scss']
})

export class DataUsageComponent extends WizardPageBase {
  dataPackages = [1, 2, 3, 4, 5, 10, 20, Infinity];
  selectedValue: number = this.dataPackages[0];

  constructor(
    private choiceService: ChoiceService,
    pageService: PageService) {
      super(pageService);
  }

  onValueChange(value: number): void {
    this.selectedValue = value;
  }

  onSubmit(): void {
    this.choiceService.DataUsage = this.selectedValue;
    this.nextPage();
  }
}
