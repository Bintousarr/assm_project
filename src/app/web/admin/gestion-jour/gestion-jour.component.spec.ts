import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionJourComponent } from './gestion-jour.component';

describe('GestionJourComponent', () => {
  let component: GestionJourComponent;
  let fixture: ComponentFixture<GestionJourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionJourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionJourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
