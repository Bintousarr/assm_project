import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpdOublierComponent } from './mpd-oublier.component';

describe('MpdOublierComponent', () => {
  let component: MpdOublierComponent;
  let fixture: ComponentFixture<MpdOublierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MpdOublierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MpdOublierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
