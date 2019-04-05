import { PageService } from '@services';

export class WizardPageBase {
  constructor(
    protected pageService: PageService) {
  }
  nextPage() {
    this.pageService.nextPage();
  }
}
