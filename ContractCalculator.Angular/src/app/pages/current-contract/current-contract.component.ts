import { Component } from '@angular/core';
import { WizardPageBase } from '@utils';
import { ChoiceService, PageService } from '@services';
import { Mods } from '@enums';

@Component({
  selector: 'app-current-contract',
  templateUrl: './current-contract.component.html',
  styleUrls: ['./current-contract.component.scss']
})

export class CurrentContractComponent extends WizardPageBase {

  providers = [
    'o2', 'EE', '3', 'Vodaphone', 'Plusnet', 'Giffgaff', 'BT', 'Virgin', 'IdMob', 'Lebara', 'Tesco', 'Smarty', 'VOXI', 'Ecotalk', 'Sky'
  ];
  monthlyCosts = [10, 20, 30, 40];
  contactDurations = [12, 18, 24];
  mods = Mods;
  constructor(
    private choiceService: ChoiceService,
    pageService: PageService) {
    super(pageService);
  }

  get currentMode(): number {
    return this.pageService.state.mode;
  }

  onSubmit(): void {
    this.nextPage();
  }
}
