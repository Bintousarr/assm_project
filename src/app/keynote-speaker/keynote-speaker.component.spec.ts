import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeynoteSpeakerComponent } from './keynote-speaker.component';

describe('KeynoteSpeakerComponent', () => {
  let component: KeynoteSpeakerComponent;
  let fixture: ComponentFixture<KeynoteSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeynoteSpeakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeynoteSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
