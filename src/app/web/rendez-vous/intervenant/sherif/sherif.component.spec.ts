import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherifComponent } from './sherif.component';

describe('SherifComponent', () => {
  let component: SherifComponent;
  let fixture: ComponentFixture<SherifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SherifComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SherifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
