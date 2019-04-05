import { Pages } from '@enums';

export class AppState {
  currentPage = Pages.landing;
  step = 0;
  mode: number;
}
