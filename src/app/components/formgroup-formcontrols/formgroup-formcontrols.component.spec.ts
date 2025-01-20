import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgroupFormcontrolsComponent } from './formgroup-formcontrols.component';

describe('FormgroupFormcontrolsComponent', () => {
  let component: FormgroupFormcontrolsComponent;
  let fixture: ComponentFixture<FormgroupFormcontrolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormgroupFormcontrolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormgroupFormcontrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
