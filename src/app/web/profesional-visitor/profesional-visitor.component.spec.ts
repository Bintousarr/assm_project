import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalVisitorComponent } from './profesional-visitor.component';

describe('ProfesionalVisitorComponent', () => {
  let component: ProfesionalVisitorComponent;
  let fixture: ComponentFixture<ProfesionalVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesionalVisitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesionalVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
