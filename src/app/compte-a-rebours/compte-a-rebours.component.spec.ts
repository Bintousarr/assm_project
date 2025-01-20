import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAReboursComponent } from './compte-a-rebours.component';

describe('CompteAReboursComponent', () => {
  let component: CompteAReboursComponent;
  let fixture: ComponentFixture<CompteAReboursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteAReboursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteAReboursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
