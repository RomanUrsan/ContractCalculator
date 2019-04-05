import { Pages } from '../enums';

export const ROUTES = [
  [Pages.currentContract, Pages.provider, Pages.dataUsage, Pages.confirm, Pages.result],
  [Pages.currentContract, Pages.device, Pages.dataUsage, Pages.confirm, Pages.result, Pages.sellOther],
  [Pages.currentContract, Pages.device, Pages.provider, Pages.dataUsage, Pages.confirm, Pages.result]
];
