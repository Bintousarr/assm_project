import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandPublicComponent } from './grand-public.component';

describe('GrandPublicComponent', () => {
  let component: GrandPublicComponent;
  let fixture: ComponentFixture<GrandPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandPublicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrandPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
