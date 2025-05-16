import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceCommandDialogComponent } from './voice-command-dialog.component';

describe('VoiceCommandDialogComponent', () => {
  let component: VoiceCommandDialogComponent;
  let fixture: ComponentFixture<VoiceCommandDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceCommandDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceCommandDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
