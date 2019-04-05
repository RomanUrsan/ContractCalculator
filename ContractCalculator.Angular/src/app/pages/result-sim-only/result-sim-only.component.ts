import { Component } from '@angular/core';
import { ChoiceService, PageService } from '@services';
import { WizardPageBase } from '../../utils/wizard-page-base';


@Component({
  selector: 'app-result-sim-only',
  templateUrl: './result-sim-only.component.html',
  styleUrls: ['./result-sim-only.component.scss']
})

export class ResultSimOnlyComponent extends WizardPageBase {
  contractCost = 50;
  separateCost = 15;

  constructor(
    private choiceService: ChoiceService,
    pageService: PageService) {
      super(pageService);
  }
}
