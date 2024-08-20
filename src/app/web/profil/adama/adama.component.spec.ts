import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdamaComponent } from './adama.component';

describe('AdamaComponent', () => {
  let component: AdamaComponent;
  let fixture: ComponentFixture<AdamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
