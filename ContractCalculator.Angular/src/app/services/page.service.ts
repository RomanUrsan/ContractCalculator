import { Injectable } from '@angular/core';
import { Mods } from '@enums';
import { AppState } from '@models';
import { ROUTES } from '@constants';

@Injectable({ providedIn: 'root' })

export class PageService {
  state = new AppState();
  readonly mods = Mods;

  changePage(newPage: number): void {
    this.state.currentPage = newPage;
  }

  get currentPage(): number {
    return this.state.currentPage;
  }

  nextPage(): void {
    this.changePage(ROUTES[this.state.mode][this.state.step]);
    this.state.step++;
  }
}
