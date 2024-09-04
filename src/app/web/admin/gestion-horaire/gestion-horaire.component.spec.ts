import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionHoraireComponent } from './gestion-horaire.component';

describe('GestionHoraireComponent', () => {
  let component: GestionHoraireComponent;
  let fixture: ComponentFixture<GestionHoraireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionHoraireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionHoraireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
