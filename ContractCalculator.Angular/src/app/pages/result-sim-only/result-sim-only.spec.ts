import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CaptureContactComponent } from './capture-contact.component';


describe('CaptureContactComponent', () => {
  let component: CaptureContactComponent;
  let fixture: ComponentFixture<CaptureContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CaptureContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
