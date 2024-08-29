import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabriceComponent } from './fabrice.component';

describe('FabriceComponent', () => {
  let component: FabriceComponent;
  let fixture: ComponentFixture<FabriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FabriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
