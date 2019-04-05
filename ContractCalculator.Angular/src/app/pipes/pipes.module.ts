import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileDataPipe } from './mobile-data.pipe';

@NgModule({
  declarations: [MobileDataPipe],
  imports: [CommonModule],
  exports: [MobileDataPipe]
})

export class PipesModule { }
