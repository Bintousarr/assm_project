import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccesDialogComponent } from './login-succes-dialog.component';

describe('LoginSuccesDialogComponent', () => {
  let component: LoginSuccesDialogComponent;
  let fixture: ComponentFixture<LoginSuccesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSuccesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSuccesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
