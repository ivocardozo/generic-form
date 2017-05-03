import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormElementTextComponent } from './form-element-text.component';

describe('FormElementTextComponent', () => {
  let component: FormElementTextComponent;
  let fixture: ComponentFixture<FormElementTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormElementTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormElementTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
