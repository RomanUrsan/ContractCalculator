import { Component } from '@angular/core';
import { WizardPageBase } from '@utils';
import { ChoiceService, PageService } from '@services';

@Component({
  selector: 'app-contract-provider',
  templateUrl: './contract-provider.component.html',
  styleUrls: ['./contract-provider.component.scss']
})

export class ContractProviderComponent extends WizardPageBase {
  providers = [
    'o2', 'EE', '3', 'Vodaphone', 'Plusnet', 'Giffgaff', 'BT', 'Virgin', 'IdMob', 'Lebara', 'Tesco', 'Smarty', 'VOXI', 'Ecotalk', 'Sky'
  ];

  constructor(
    private choiceService: ChoiceService,
    pageService: PageService) {
    super(pageService);
  }

  onSubmit(): void {
    this.nextPage();
  }
}
