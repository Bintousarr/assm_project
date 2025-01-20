import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMdpComponent } from './quote-mdp.component';

describe('QuoteMdpComponent', () => {
  let component: QuoteMdpComponent;
  let fixture: ComponentFixture<QuoteMdpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteMdpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
