import { Component, OnInit } from '@angular/core';
import { PageService } from '@services';
import { Mods } from '@enums';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit{
  readonly mods = Mods;

  constructor(
    private pageService: PageService) {
  }

  nextPage(mode: number): void {
    this.pageService.state.mode = mode;
    this.pageService.nextPage();
  }

  ngOnInit(): void {
    this.pageService.state.step = 0;
  }
}
