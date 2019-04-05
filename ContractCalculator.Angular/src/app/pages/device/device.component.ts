import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WizardPageBase } from '@utils';
import { ChoiceService, PageService, NgOnDestroy } from '@services';
import { FormControl } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { takeUntil, take} from 'rxjs/operators';
import { MatSelect } from '@angular/material';
@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  providers: [NgOnDestroy]
})

export class DeviceComponent extends WizardPageBase implements OnInit, AfterViewInit {
  @ViewChild('modelSelect') modelSelect: MatSelect;

  brands = ['Apple logo', 'Samsung', 'Huawei', 'Google', 'Oneplus', 'Sony', 'LG', 'Nokia', 'Mi'];
  models = ['iPhone1', 'iPhone2', 'iPhone3', 'iPhone4', 'iPhone5', 'iPhone6', 'iPhone7', 'iPhone8'];
  modelControl: FormControl = new FormControl();
  public modelFilterControl: FormControl = new FormControl();
  public filteredModels$: ReplaySubject<string[]> = new ReplaySubject<string[]>(1);

  constructor(
    private choiceService: ChoiceService,
    pageService: PageService,
    private onDestroy$: NgOnDestroy) {
    super(pageService);
  }

  ngOnInit(): void {
    this.modelControl.setValue(this.models[0]);
    this.filteredModels$.next(this.models.slice());
    this.modelFilterControl.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.filterModels();
      });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  }

  protected setInitialValue() {
    this.filteredModels$
      .pipe(take(1), takeUntil(this.onDestroy$))
      .subscribe(() => {
        this.modelSelect.compareWith = (a: string, b: string) => a && b && a === b;
      });
  }

  onSubmit(): void {
    this.nextPage();
  }

  private filterModels(): void {
    if (!this.models) {
      return;
    }
    let search = this.modelFilterControl.value;
    if (!search) {
      this.filteredModels$.next(this.models.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    this.filteredModels$.next(
      this.models.filter(model => model.toLowerCase().indexOf(search) > -1)
    );
  }
}
