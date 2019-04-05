import { Component } from '@angular/core';
import { PageService } from '@services';
import { Pages } from '@enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  readonly pages = Pages;
  constructor(
    private pageService: PageService
  ) {
  }

  get currentPage(): number {
    return this.pageService.currentPage;
  }
}
