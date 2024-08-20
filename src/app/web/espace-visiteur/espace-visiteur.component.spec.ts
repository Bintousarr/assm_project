import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceVisiteurComponent } from './espace-visiteur.component';

describe('EspaceVisiteurComponent', () => {
  let component: EspaceVisiteurComponent;
  let fixture: ComponentFixture<EspaceVisiteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceVisiteurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
