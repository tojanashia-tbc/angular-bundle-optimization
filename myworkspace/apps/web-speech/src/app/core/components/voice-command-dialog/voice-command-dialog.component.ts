import {ChangeDetectionStrategy, Component, computed, Inject, OnDestroy, signal} from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {TranslatePipe} from "@ngx-translate/core";
import {NgIf} from "@angular/common";
import {SpeakDirective} from "../../directive/appSpeak";
import {AudioService} from "../../services/audio.service";

@Component({
  standalone: true,
  selector: 'app-voice-command-dialog',
  styleUrls: ['voice-command-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>{{ 'VOICE.COMMAND.TITLE' | translate }}</h2>
    <div class="listening-animation" *ngIf="isListening()">
      <p class="listening-text">{{ 'VOICE.COMMAND.LISTENING' | translate }}...</p>
    </div>
    <mat-dialog-content>
      <p>{{ 'VOICE.COMMAND.LABEL'| translate }}:</p>
      <strong>{{ transcript() }}</strong>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-stroked-button (click)="onRetry()" [appSpeak]="'RETRY'">{{ 'VOICE.COMMAND.RETRY'| translate }}
      </button>
      <button mat-flat-button color="primary" (click)="onConfirm()"
              [appSpeak]="'CONFIRM'">{{ 'VOICE.COMMAND.CONFIRM'| translate }}
      </button>
    </mat-dialog-actions>
  `,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    TranslatePipe,
    NgIf,
    SpeakDirective,
  ],
})
export class VoiceCommandDialogComponent implements OnDestroy {
  transcript = signal('');
  isListening = computed(() => this.commandInProgress());
  commandInProgress = signal(false);
  private timeoutHandle: any;
  private readonly MAX_LISTEN_TIME = 5000;
  private recognition: any;
  @Inject(MAT_DIALOG_DATA) public data: any;

  constructor(private dialogRef: MatDialogRef<VoiceCommandDialogComponent>, @Inject(MAT_DIALOG_DATA) data: any, private audioService: AudioService) {
    this.recognition = new (window as any).webkitSpeechRecognition();
    this.recognition.lang = data.lang === 'en' ? 'en-EN' : 'ka-GE';

    const self = this;
    this.recognition.onresult = async (event: any) => {
      clearTimeout(this.timeoutHandle);
      self.transcript.set(event.results[0][0].transcript.toLowerCase());
    }

    this.recognition.onstart = () => {
      this.commandInProgress.set(true)
      this.timeoutHandle = setTimeout(() => {
        if (this.commandInProgress()) {
          this.recognition.stop();
        }
      }, this.MAX_LISTEN_TIME);
    };

    this.recognition.onend = () => {
      clearTimeout(this.timeoutHandle);
      this.commandInProgress.set(false);
      const value = this.transcript();
      this.speak(value || 'Sorry, could not get that');
    };

    this.recognition.onerror = (event: any) => {
      clearTimeout(this.timeoutHandle);
      this.commandInProgress.set(false);
      console.error('SpeechRecognition error:', event.error);
    };

    this.recognition.start();
  }

  onRetry() {
    this.recognition.stop();
    setTimeout(() => {
      if (!this.commandInProgress()) {
        this.transcript.set('');
        this.audioService.playStartSound();
        this.recognition.start();
      }
    }, 200);
  }

  onConfirm() {
    this.recognition.stop();
    this.dialogRef.close({action: 'confirm', transcript: this.transcript()});
  }

  private speak(text: string) {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.volume = 0.5;
      utterance.rate = 1.5;
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('TTS not supported in this browser.');
    }
  }

  ngOnDestroy() {
    this.recognition?.stop();
  }
}
