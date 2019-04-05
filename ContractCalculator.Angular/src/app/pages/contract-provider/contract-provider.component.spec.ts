import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {  ContractProviderComponent } from './contract-provider.component';


describe('ContractProviderComponent', () => {
  let component: ContractProviderComponent;
  let fixture: ComponentFixture< ContractProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContractProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
