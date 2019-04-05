import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentContractComponent } from './current-contract.component';


describe('CurrentContractComponent', () => {
  let component: CurrentContractComponent;
  let fixture: ComponentFixture<CurrentContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
