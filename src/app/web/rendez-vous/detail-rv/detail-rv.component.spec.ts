import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRvComponent } from './detail-rv.component';

describe('DetailRvComponent', () => {
  let component: DetailRvComponent;
  let fixture: ComponentFixture<DetailRvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
