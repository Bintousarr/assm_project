import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TidianeComponent } from './tidiane.component';

describe('TidianeComponent', () => {
  let component: TidianeComponent;
  let fixture: ComponentFixture<TidianeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TidianeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TidianeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
