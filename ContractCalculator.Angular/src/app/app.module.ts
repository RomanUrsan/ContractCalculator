import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  MatCardModule, MatFormFieldModule, MatButtonToggleModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CurrentContractComponent } from './pages/current-contract/current-contract.component';
import { DataUsageComponent } from './pages/data-usage/data-usage.component';
import { CaptureContactComponent } from './pages/capture-contact/capture-contact.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ContractProviderComponent } from './pages/contract-provider/contract-provider.component';
import { PipesModule } from './pipes/pipes.module';
import { DeviceComponent } from './pages/device/device.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ResultSimOnlyComponent } from './pages/result-sim-only/result-sim-only.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CurrentContractComponent,
    DataUsageComponent,
    CaptureContactComponent,
    ContractProviderComponent,
    DeviceComponent,
    ResultSimOnlyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonToggleModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    PipesModule,
    FormsModule,
    MatIconModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
