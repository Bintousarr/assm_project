import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirMarcheComponent } from './voir-marche.component';

describe('VoirMarcheComponent', () => {
  let component: VoirMarcheComponent;
  let fixture: ComponentFixture<VoirMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoirMarcheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
