import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrateurComponent } from './orateur.component';

describe('OrateurComponent', () => {
  let component: OrateurComponent;
  let fixture: ComponentFixture<OrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
