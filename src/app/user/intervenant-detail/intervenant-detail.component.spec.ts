import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervenantDetailComponent } from './intervenant-detail.component';

describe('IntervenantDetailComponent', () => {
  let component: IntervenantDetailComponent;
  let fixture: ComponentFixture<IntervenantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntervenantDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervenantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
