import {Component, HostListener, inject} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TransferService} from "../../../../shared/src/lib/transfers.service";
import {TranslatePipe, TranslateService} from "@ngx-translate/core";
import {VoiceCommandDialogComponent} from "./core/components/voice-command-dialog/voice-command-dialog.component";
import {MatDialogModule, MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {NgIf} from "@angular/common";
import {SpeakDirective} from "./core/directive/appSpeak";
import {SpeechControlService} from "./core/services/speech-service";
import {VoiceCommandService} from "./core/services/voice-command.service";
import {AudioService} from "./core/services/audio.service";

const LANG_COOKIE = 'app_lang';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    TranslatePipe,
    MatDialogModule,
    NgIf,
    SpeakDirective
  ],

  providers: [TransferService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  lang: string;
  private translate = inject(TranslateService);
  private dialog = inject(MatDialog);
  private speechControlService = inject(SpeechControlService);
  private voiceService = inject(VoiceCommandService);
  private audioService = inject(AudioService);
  speakerOn: boolean = true;

  constructor() {
    const savedLang = this.getCookie(LANG_COOKIE);
    this.lang = savedLang || 'en';
    this.translate.use(this.lang);
    this.setCookie(LANG_COOKIE, this.lang, 365);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const isCtrlOrCmd = event.ctrlKey || event.metaKey;
    if (isCtrlOrCmd && event.key.toLowerCase() === 'm') {
      this.openVoiceModal();
    }
  }

  switchLang(lang: string) {
    this.lang = lang;
    this.translate.use(this.lang);
    this.setCookie(LANG_COOKIE, this.lang, 365);
  }

  setCookie(name: string, value: string, days: number) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  getCookie(name: string): string | null {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='))
      ?.split('=')[1] || null;
  }

  openVoiceModal() {
    this.audioService.playStartSound();
    const dialogRef = this.dialog.open(VoiceCommandDialogComponent, {
      width: '400px',
      data: {transcript: '', lang: this.lang},
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === 'confirm') {
        this.voiceService.sendCommand(result.transcript)
      }
    });
  }

  toggleSpeaker() {
    this.speakerOn = !this.speakerOn
    this.speechControlService.toggleSpeaker(this.speakerOn)
  }
}
