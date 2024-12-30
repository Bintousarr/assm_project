import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSuccessDialogComponent } from './quote-success-dialog.component';

describe('QuoteSuccessDialogComponent', () => {
  let component: QuoteSuccessDialogComponent;
  let fixture: ComponentFixture<QuoteSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteSuccessDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
