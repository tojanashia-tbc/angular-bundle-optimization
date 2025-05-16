import {inject, Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {SpeechControlService} from "./speech-service";
import {TranslateService} from "@ngx-translate/core";

const voiceCommandMap: Record<string, string> = {
  'go to new transfer': '/transfers/new-transfer',
  'go to loans': 'loans',
  'go to home': 'home',
  'go to transfers': 'transfers',
};

const geToEnCommandMap: Record<string, string> = {
  'გადადი სესხებზე': 'go to loans',
  'გადადი ტრანსფერებზე': 'go to transfers',
  'გადადი მთავარზე': 'go to home',
  'გადადი გადარიცხვაზე': 'go to new transfer',
};

const numberWords: Record<string, number> = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'hundred': 100,
  'thousand': 1000,
};

export const voiceAudioMap: Record<string, string> = {
  'HOME': 'assets/sounds/home.m4a',
};

@Injectable({providedIn: 'root'})
export class VoiceCommandService {
  private speechControlService = inject(SpeechControlService);
  private translate = inject(TranslateService);
  private router = inject(Router);
  private commandSubject = new Subject<string | number>();

  command$ = this.commandSubject.asObservable();

  sendCommand(cmd: string) {
    if (cmd.startsWith('go to') || cmd.startsWith('გადადი')) {
      const route = voiceCommandMap[geToEnCommandMap[cmd.toLowerCase()] || cmd.toLowerCase()];
      this.navigateTo(route)
    }
    this.commandSubject.next(numberWords[cmd] || cmd);
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]).then(() => this.speak(page.toUpperCase()));
  }

  speak(key: string) {
    if (this.translate.currentLang === 'ka') {
      const audio = new Audio(voiceAudioMap[key]);
      audio.play();
      return;
    }
    if (!this.speechControlService.isSpeakerEnabled) return;
    let text = this.translate.instant(key)
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('TTS not supported in this browser.');
    }
  }

}
