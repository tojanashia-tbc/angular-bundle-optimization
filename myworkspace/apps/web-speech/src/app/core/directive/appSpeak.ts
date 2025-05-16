import {Directive, HostListener, inject, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {SpeechControlService} from "../services/speech-service";

@Directive({
  selector: '[appSpeak]'
})
export class SpeakDirective {
  private speechControlService = inject(SpeechControlService);
  @Input('appSpeak') key!: string;

  constructor(private translate: TranslateService) {
  }

  @HostListener('mouseenter')
  @HostListener('focus')
  speak() {
    if (!this.speechControlService.isSpeakerEnabled) return; // Check if speaking is allowed

    const translatedText = this.translate.instant(this.key.toUpperCase());
    const utterance = new SpeechSynthesisUtterance(translatedText);
    window.speechSynthesis.speak(utterance);
  }

  @HostListener('mouseleave')
  @HostListener('focusout')
  cancel() {
    if (!this.speechControlService.isSpeakerEnabled) return; // Check if speaking is allowed

    window.speechSynthesis.cancel();
  }
}
